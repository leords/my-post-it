import prismaClient from "../../prisma"


class CreateProjectService {
    async execute(author: string, name:string, description:string) {
        const newProject = await prismaClient.project.create({

            data: { 
                author,
                name,
                description,
            },
        });
        return newProject
    }
}

export { CreateProjectService }