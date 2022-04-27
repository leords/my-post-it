import { Request, Response } from "express";
import { CreateTaskService } from "../../service/task/CreateTaskService";

class CreateTaskController {
    async handle(request: Request, response: Response){
        const {project} = request.body
        const {name} = request.body
        const {description} = request.body
        const {user} = request.body

        const service = new CreateTaskService();
        const result = await service.execute(project, name, description, user)

        return response.json(result)
    }
}

export { CreateTaskController }