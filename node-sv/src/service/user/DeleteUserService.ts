import prismaClient from "../../prisma";

class DeleteUserService {
    async execute(id_email: string) {
        const DeleteUser = await prismaClient.user.delete({
            where: {
                email: id_email,
            },
        });
        return DeleteUser
    }
}

export { DeleteUserService }