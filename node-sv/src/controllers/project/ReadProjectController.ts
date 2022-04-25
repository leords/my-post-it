import { Request, Response } from "express";
import { ReadProjectService } from "../../service/project/ReadProjectService";


class ReadProjectController {

    async handleAll(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.executeAll(id);

        return response.json(result)
    }

    async handleAllOff(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.executeAllOff(id);

        return response.json(result)
    }

    async handleAllOn(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.executeAllOn(id);

        return response.json(result)
    }

}

export { ReadProjectController }