import prismaClient from "../../prisma";


class ReadTaskService {

/* FUNÇÃO FINDMANY - RETORNA OS PROJETOS CONFORME A ESPECIFICAÇÃO */

// Todos as tasks, cadastrados no projeto.
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

// Todos as tasks ativas, cadastrados no projeto.
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

// Todos as tasks desativadas, cadastrados no projeto.
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


/* FUNÇÃO COUNT - RETORNA A QUANTIDADE DE TASKS CONFORME A ESPECIFICAÇÃO */

//Quantidade de tasks, cadastradas no projeto.
    async countAllOfProject(project_id: string){
        const newRead = await prismaClient.task.count({
            where: {
                project: project_id
            }, 
            orderBy: {
                date_start: "desc"
            },
        });
        return newRead
    }

//Quantidade de tasks ativadas, cadastradas no projeto.
    async countAllOn(project_id: string) {
        const newRead = await prismaClient.task.count({
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

//Quantidade de tasks desativadas, cadastradas no projeto.
    async countAllOff(project_id: string) {
        const newRead = await prismaClient.task.count({
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