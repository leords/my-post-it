import prismaClient from "../../prisma";

class DeleteTaskService {
    async execute(id: string) {
        const DeleteTask = new prismaClient.task.delete({
            where: {
                id: id,
            },
        }); 
        return DeleteTask
    }
}