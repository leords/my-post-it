import { Request, Response } from "express";
import { ReadProjectService } from "../../service/project/ReadProjectService";


class ReadProjectController {

/* Retorna todos os projetos conforme as especificações */

    async handleAll(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.executeAll(id);

        return response.json(result)
    }

    async handleUnique(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.executeUnique(id);

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



/* Contagem de projetos conforme as especificações */

    async handleCountAll(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.countAll(id);

        return response.json(result)
    }

    async handleCountAllOff(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.countAllOff(id);

        return response.json(result)
    }

    async handleCountAllOn(request: Request, response: Response) {
        const {id} = request.body;

        const service = new ReadProjectService();
        const result = await service.countAllOn(id);

        return response.json(result)
    }

}

export { ReadProjectController }