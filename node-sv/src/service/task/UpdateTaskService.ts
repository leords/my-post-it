  import prismaClient from "../../prisma";

  class UpdateTaskService {
      async executeName(id: string, name_update: string) {
          const taskUpdate = await prismaClient.task.update({
            where: {
                id: id
            },
            data: {
                name: name_update
            }
          });
          return taskUpdate
      }

      async executeDescription(id: string, update_description: string){
          const taskUpdate = await prismaClient.task.update({
              where: {
                  id: id,
              },
              data: {
                  description: update_description
              }
          });
          return taskUpdate
      }
  }

  export { UpdateTaskService }