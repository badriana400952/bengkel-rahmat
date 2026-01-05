'use server'
import cloudinary from "@/lib/cloudinary";
import { prisma } from "../lib/prisma"
import { revalidatePath } from "next/cache";

export const GetGalleryImages = async () => {
    try {
        const data = await prisma.galery.findMany();
        return data;
    } catch (error) {
        throw error;
    }
}

export const postGalleryImage = async (formData: FormData) => {
  const file = formData.get("imageUrl") as File;
  const caption = formData.get("caption") as string;
    if (!file) throw new Error("Image is required");

    const byte = await file.arrayBuffer();
    const buffer = Buffer.from(byte);

    const uploadResult: any = await new Promise<string>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {folder: "bengkel"},
            (error, result) => {
                if (error) return reject(error);
                if (!result || !result.secure_url) return reject(new Error("Upload failed"));
                resolve(result.secure_url);
            }
        ).end(buffer);
    })
    try {
         await prisma.galery.create({
            data: {
                imageUrl: uploadResult,
                caption 
            }
        });
        revalidatePath("/galery");
    } catch (error) {
        throw error;
    }
}   