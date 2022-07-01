import prismaClient from "../../prisma";


class CreateTaskService {
    async execute(project: string, name:string, description:string, user:string){
        const newTask = prismaClient.task.create({
            data: {
                project,
                name, 
                description,
                user,
            },
        });
        return newTask
    }
}

export { CreateTaskService }
