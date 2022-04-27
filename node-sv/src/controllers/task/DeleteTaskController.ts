import { Request, Response } from "express";
import { DeleteTaskService } from "../../service/task/DeleteTaskService";

class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const {id} = request.body;

        const service = new DeleteTaskService()
        const result = await service.execute(id)

        return response.json(result)
    }
}

export { DeleteTaskController }