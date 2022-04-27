import prismaClient from "../../prisma";


class DeleteUserService {

    async execute(id: string) {

/*         // Pegando o id do projeto pelo id do usuário passado para ser deletado!

        const idProject = await prismaClient.project.findFirst({
            where: {
                author: id
            },
            select: {
                author: true
            },
        });

        // deletando todas as tasks no projeto deste usuário
        const DeleteAlltask = await prismaClient.task.deleteMany({
            where: {
                 project: idProject as any
            },
        });

        const DeleteAlltProject = await prismaClient.project.deleteMany({
            where: {
                 author: id 
            },
        }); */

        const DeleteUser = await prismaClient.user.delete({
            where: {
                id: id,
            },
        });
        return DeleteUser
    } 
}

export { DeleteUserService }