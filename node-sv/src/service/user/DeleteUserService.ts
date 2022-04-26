import prismaClient from "../../prisma";

class DeleteUserService {
    async execute(id: string) {
        const DeleteUser = await prismaClient.user.delete({
            where: {
                id: id,
            },
        });
        return DeleteUser
    }
}

export { DeleteUserService }