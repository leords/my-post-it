import prismaClient from "../../prisma";


class ReadTaskService {
    async executeAllOfProject(project_id: string){
        const newRead = await prismaClient.task.findFirst({
            where: {
                id: project_id
            }, 
            orderBy: {
                date_start: "desc"
            },
        });
        return newRead
    }

    async executeAllOn(project_id: string) {
        const newRead = await prismaClient.task.findFirst({
            where: {
                id: project_id,
                status: true
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return newRead
    }

    async executeAllOff(project_id: string) {
        const newRead = await prismaClient.task.findFirst({
            where: {
                id: project_id, 
                status: false
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return newRead
    }
}

export { ReadTaskService }