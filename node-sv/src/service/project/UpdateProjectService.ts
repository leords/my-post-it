import prismaClient from "../../prisma";

class UpdateProjectService {

    async executeEditName(id_project: string, name_update: string) {

        const updateProject = await prismaClient.project.update({
            where: {
                id: id_project
            },
            data: {
                name: name_update,
            },
        });
        
        return updateProject
    }

    async executeEditDescription(id_project: string, description_update: string) {

        const updateProject = await prismaClient.project.update({
            where: {
                id: id_project
            },
            data: {
                description: description_update
            },
        });

        return updateProject
    }

    async executeEditStatus(id_project: string, status_project: boolean) {

        const updateProject = await prismaClient.project.update({
            where: {
                id: id_project
            },
            data: {
                status: status_project,
            },
        });

        return updateProject
    }
}

export { UpdateProjectService }