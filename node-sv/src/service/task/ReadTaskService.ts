import prismaClient from "../../prisma";


class ReadTaskService {
    async executeAllOfProject(project_id: string){
        const newRead = await prismaClient.task.findMany({
            where: {
                project: project_id
            }, 
            orderBy: {
                date_start: "desc"
            },
        });
        return newRead
    }

    async executeAllOn(project_id: string) {
        const newRead = await prismaClient.task.findMany({
            where: {
                project: project_id,
                status: true
            },
            orderBy: {
                name: "desc"
            }
        });
        return newRead
    }

    async executeAllOff(project_id: string) {
        const newRead = await prismaClient.task.findMany({
            where: {
                project: project_id, 
                status: false
            },
            orderBy: {
                name: "desc"
            }
        });
        return newRead
    }
}

export { ReadTaskService }