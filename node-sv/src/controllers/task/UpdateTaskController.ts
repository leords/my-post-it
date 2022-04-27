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

    async handleEditStatusFalse(request: Request, response: Response) {
        const {id} = request.body;

        const service = new UpdateTaskService();
        const result = await service.executeStatusforFalse(id);

        return response.json(result)
    }

    async handleEditStatusTrue(request: Request, response: Response) {
      const {id} = request.body;

      const service = new UpdateTaskService();
      const result = await service.executeStatusforTrue(id);

      return response.json(result)
    }
  }

  export { UpdateTaskController }