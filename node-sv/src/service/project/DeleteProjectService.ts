import prismaClient from "../../prisma";

class DeleteProjectService {
    async execute(id_project: string) {

        // Apagando todas as tasks no id deste projeto.
        const DeleteAlltask = await prismaClient.task.deleteMany({
            where: {
                 project: id_project
            },
        });

        const DeleteProject = await prismaClient.project.delete({
            where: {
                id: id_project,
            },
        });
        return DeleteProject
    }
}

export { DeleteProjectService }