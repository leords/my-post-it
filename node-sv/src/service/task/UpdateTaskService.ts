  import prismaClient from "../../prisma";

  class UpdateTaskService {
      async executeName(id: string, name_update: string) {
          const taskUpdate = await prismaClient.task.update({
            where: {
                id: id
            },
            update: {
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
              update: {
                  description: update_description
              }
          });
          return taskUpdate
      }

      async executeDeadline(id: string, update_deadline: string) {
          const taskUpdate = await prismaClient.task.update({
              where: {
                  id: id,
              },
              update: {
                  deadline: update_deadline
              }
          })
      }

  }

  export { UpdateTaskService }