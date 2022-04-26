import prismaClient from "../../prisma";

class DeleteTaskService {
    async execute(id: string) {
        const DeleteTask = prismaClient.task.delete({
            where: {
                id: id,
            },
        }); 
        return DeleteTask
    }
}

export { DeleteTaskService }