import prismaClient from "../../prisma";


class CreateTaskService {
    async execute(name:string, description:string, deadline:string){
        const NewTask = prismaClient.task.create({
            data: {
                name, 
                description,
                deadline,
            },
        });
        return NewTask
    }
}

export { CreateTaskService }
