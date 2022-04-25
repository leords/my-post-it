import prismaClient from "../../prisma";

class UpdateProjectService {
    async execute(id_project: string, name_update: string, description_update: string, deadline_update: string) {

        const updateProject = await prismaClient.project.update({
            where: {
                id: id_project
            },
            update: {
                name: name_update,
                description: description_update,
                deadline: deadline_update
            },
        });
        return updateProject
    }
}

export { UpdateProjectService }