import prismaClient from "../../prisma";

class DeleteTaskService {
    async execute(id: string) {
        const DeleteTask = await prismaClient.task.delete({
            where: {
                id: id,
            },
        }); 
        return DeleteTask
    }
}

export { DeleteTaskService }