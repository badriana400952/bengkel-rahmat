'use server'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type State = {
  success: boolean;
  message: string;
  users?: any;
};

export const getUser = async () => {
  try {
    const users = await prisma.user.findFirst();
    return users;
  } catch (error) {
    throw error;
  }
}
export const loginUsers = async (prevState: State, formData: FormData): Promise<State> => {
  const form = Object.fromEntries(formData.entries());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: form.email as string,
        name: form.name as string,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "Email atau nama tidak valid",
      };
    }

    revalidatePath("/");
    return {
      success: true,
      users: user,
      message: "Login berhasil",
    };
  } catch (error) {
    return {
      success: false,
      message: "Terjadi kesalahan server",
    };
  }
};
