import prismaClient from "../../prisma";

class UpdateProjectService {
    async execute(id_project: string, name_update: string, description_update: string) {

        const updateProject = await prismaClient.project.update({
            where: {
                id: id_project
            },
            data: {
                name: name_update,
                description: description_update

            },
        });
        return updateProject
    }
}

export { UpdateProjectService }