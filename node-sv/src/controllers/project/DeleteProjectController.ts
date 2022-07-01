import { Request, Response } from "express";
import { DeleteProjectService } from "../../service/project/DeleteProjectService";

class DeleteProjectController {
    async handle(request: Request, response: Response) {
        const {id} = request.body;

        const service = new DeleteProjectService();
        const result = await service.execute(id);

        return response.json(result)
    }
}

export { DeleteProjectController }