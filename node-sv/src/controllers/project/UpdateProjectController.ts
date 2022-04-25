import { Request, Response } from "express";
import { UpdateProjectService } from "../../service/project/UpdateProjectService";


class UpdateProjectController {
    async handle(request: Request, response: Response) {
        const {id} = request.body;
        const {name} = request.body;
        const {description} = request.body;
        const {deadline} = request.body;

        const service = new UpdateProjectService();
        const result = await service.execute(id, name, description, deadline);

        return response.json(result)

    }
}

export { UpdateProjectController }
