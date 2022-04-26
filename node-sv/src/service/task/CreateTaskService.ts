import prismaClient from "../../prisma";


class CreateTaskService {
    async execute(project: string, name:string, description:string){
        const NewTask = prismaClient.task.create({
            data: {
                project,
                name, 
                description
            },
        });
        return NewTask
    }
}

export { CreateTaskService }
