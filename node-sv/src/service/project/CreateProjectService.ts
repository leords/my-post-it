import prismaClient from "../../prisma";


class CreateProjectService {
    async execute(user_id:string, name:string, description:string, deadline:string) {
        const newProject = await prismaClient.project.create({
            data: {
                user_id,
                name,
                description,
                deadline,
            },
        });
        return newProject
    }
}

export { CreateProjectService }