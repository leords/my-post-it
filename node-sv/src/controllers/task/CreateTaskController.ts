import { Request, Response } from "express";
import { CreateTaskService } from "../../service/task/CreateTaskService";

class CreateTaskController {
    async handle(request: Request, response: Response){
        const {name} = request.body
        const {description} = request.body
        const {deadline} = request.body

        const service = new CreateTaskService();
        const result = await service.execute(name, description, deadline)

        return response.json(result)
    }
}

export { CreateTaskController }