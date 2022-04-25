import { Request, Response } from "express";
import { CreateProjectService } from "../../service/project/CreateProjectService";

class CreateProjectController {
    async handle(request: Request, response: Response) {

        const {name} = request.body;
        const {description} = request.body;
        const {deadline} = request.body;
        const {user_id} = request;

        const service = new CreateProjectService();
        const result = await service.execute(user_id, name, description, deadline)

        return response.json(result)
    }
}

export { CreateProjectController }
