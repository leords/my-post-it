import prismaClient from "../../prisma";

class ReadProjectService {

/* FUNÇÃO FINDMANY - RETORNA OS PROJETOS CONFORME A ESPECIFICAÇÃO */

// Todos os projetos, cadastrados pelo o usuário.
    async executeAll(id_project: string) {
        const readProject = await prismaClient.project.findMany({
            where: {
                author: id_project
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }

// Buscando por apenas um projeto.
    async executeUnique(id_project: string) {
        const readProject = await prismaClient.project.findUnique({
            where: {
                id: id_project
            },
        });
        return readProject
    }

// Todos os projetos desativados, cadastrados por usuário.
    async executeAllOff(id_project: string) {
        const readProject = await prismaClient.project.findMany({
            where: {
                author: id_project,
                status: false
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }

// Todos os projetos ativados, cadastrados por usuário.
    async executeAllOn(id_project: string) {
        const readProject = await prismaClient.project.findMany({
            where: {
                author: id_project,
                status: true
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }


/* FUNÇÃO COUNT - RETORNA A QUANTIDADE DE PROJETOS CONFORME A ESPECIFICAÇÃO */


// Quantidade de projetos, cadastrados pelo o usuário.
    async countAll(id_project: string) {
        const readProject = await prismaClient.project.count({
            where: {
                author: id_project
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }

// Quantidade de projetos desativados, cadastrados por usuário.
    async countAllOff(id_project: string) {
        const readProject = await prismaClient.project.count({
            where: {
                author: id_project,
                status: false
            },
            orderBy: {
                date_start: "desc"
            }
        });
        return readProject
    }

// Quantidade de projetos ativados, cadastrados por usuário.
    async countAllOn(id_project: string) {
        const readProject = await prismaClient.project.count({
            where: {
                author: id_project,
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