import prismaClient from "../../prisma";

class DeleteProjectService {
    async execute(id_project: string) {
        const DeleteProject = await prismaClient.project.delete({
            where: {
                id: id_project,
            },
        });
        return DeleteProject
    }
}

export { DeleteProjectService }