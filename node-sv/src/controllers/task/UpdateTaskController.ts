  import { Request, Response } from "express";
  import { UpdateTaskService } from "../../service/task/UpdateTaskService";


  class UpdateTaskController {

    async handleEditName(request: Request, response: Response) {
        const {id} = request.body;
        const {name} = request.body;

        const service = new UpdateTaskService();
        const result = await service.executeName(id, name);

        return response.json(result)
    }

    async handleEditDescription(request: Request, response: Response) {
        const {id} = request.body;
        const {description} = request.body;

        const service = new UpdateTaskService();
        const result = await service.executeDescription(id, description);

        return response.json(result)
    }

    async handleEditDeadline(request: Request, response: Response) {
        const {id} = request.body;
        const {deadline} = request.body;

        const service = new UpdateTaskService();
        const result = await service.executeDeadline(id, deadline);

        return response.json(result)
    }
  }

  export { UpdateTaskController }