import { Request, Response } from "express";
import { ReadTaskService } from "../../service/task/ReadTaskService";


class ReadTaskController {
    async handleAll(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadTaskService();
        const result = await service.executeAllOfProject(id);

        return response.json(result)
    }

    async handleAllOff(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadTaskService();
        const result = await service.executeAllOff(id);

        return response.json(result)
    }

    async handleAllOn(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadTaskService();
        const result = await service.executeAllOn(id);

        return response.json(result)
    }
}

export { ReadTaskController  }