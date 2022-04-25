import prismaClient from "../../prisma";

class ReadProjectService {

    async executeAll(id_project: string) {
        const readProject = await prismaClient.project.findFirst({
            where: {
                id: id_project
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }

    async executeAllOff(id_project: string) {
        const readProject = await prismaClient.project.findFirst({
            where: {
                id: id_project,
                status: false
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }

    async executeAllOn(id_project: string) {
        const readProject = await prismaClient.project.findFirst({
            where: {
                id: id_project,
                status: true
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }
}

export { ReadProjectService }