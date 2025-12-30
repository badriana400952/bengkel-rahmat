import { prisma } from "../prisma";

export const getGataUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        throw error;
    }
}

