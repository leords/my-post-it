import { Request, Response } from "express";
import { ReadTaskService } from "../../service/task/ReadTaskService";


class ReadTaskController {

/* Retorna todas as tasks conforme as especificações */

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

    

/* Contatagem das tasks conforme as especificações */

    async handleCountAll(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadTaskService();
        const result = await service.countAllOfProject(id);

        return response.json(result)
    }

    async handleCountAllOff(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadTaskService();
        const result = await service.countAllOff(id);

        return response.json(result)
    }

    async handleCountAllOn(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadTaskService();
        const result = await service.executeAllOn
        (id);

        return response.json(result)
    }
}

export { ReadTaskController  }