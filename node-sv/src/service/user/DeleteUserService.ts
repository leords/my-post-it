import prismaClient from "../../prisma";


class DeleteUserService {

    async execute(id: string) {

        // Apagando todas as tasks no projeto com id deste usuário.
        const DeleteAlltask = await prismaClient.task.deleteMany({
            where: {
                 user: id
            },
        });

        // Apagando todas os projetos com id deste usuário.
        const DeleteAlltProject = await prismaClient.project.deleteMany({
            where: {
                 author: id 
            },
        }); 

        // Apagando o usuário.
        const DeleteUser = await prismaClient.user.delete({
            where: {
                id: id,
            },
        });
        return DeleteUser
    } 
}

export { DeleteUserService }