'use server'
import { revalidatePath } from "next/cache";
import { prisma } from "../lib/prisma"
import { z } from "zod"
import { redirect } from "next/navigation";
const ulasanSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    kendaraan: z.string().min(1, "Jenis kendaraan harus diisi"),
    rating: z.string().min(1, "Rating harus diisi"),
    komentar: z.string().min(1, "Komentar harus diisi"),
});

export const handleGetUlasan = async () => {
    try {
        const response = await prisma.ulasan.findMany();
        return response;
    } catch (error) {
       throw error; 
    }
}

export const handlePostUlasan = async (formData:FormData ): Promise<any> => {
    const data = ulasanSchema.safeParse(Object.fromEntries(formData.entries()))
    if (!data.success) {
        console.log(data.error.format());
        return;
    }
    try {
       await prisma.ulasan.create({
            data: {
                nama: data.data.nama,
                kendaraan: data.data.kendaraan,
                rating: Number(data.data.rating),
                komentar: data.data.komentar,
            }
        })
    } catch (error) {
        return {message: "Gagal mengirim ulasan", error}
    }
    revalidatePath("/#reviews")
    redirect("/#reviews")
}