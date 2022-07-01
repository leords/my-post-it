import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { CreateProjectService } from "../../service/project/CreateProjectService";

class CreateProjectController {
    async handle(request: Request, response: Response) {


        const {author} = request.body;
        const {name} = request.body;
        const {description} = request.body;

        const service = new CreateProjectService();
        const result = await service.execute(author, name, description)

        return response.json(result)
    }
}

export { CreateProjectController }
