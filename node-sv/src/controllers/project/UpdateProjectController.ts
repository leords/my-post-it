import { Request, Response } from "express";
import { UpdateProjectService } from "../../service/project/UpdateProjectService";


class UpdateProjectController {
    async handleEditName(request: Request, response: Response) {
        const {id} = request.body;
        const {name} = request.body;

        const service = new UpdateProjectService();
        const result = await service.executeEditName(id, name);

        return response.json(result)

    }

    async handleEditDescription(request: Request, response: Response) {
        const {id} = request.body;
        const {name} = request.body;
        const {description} = request.body;

        const service = new UpdateProjectService();
        const result = await service.executeEditDescription(id, description);

        return response.json(result)

    }

    async handleEditStatus(request: Request, response: Response) {
        const {id} = request.body;
        const {status} = request.body;

        const service = new UpdateProjectService();
        const result = await service.executeEditStatus(id, status);

        return response.json(result)

    }
}

export { UpdateProjectController }
