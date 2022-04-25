import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const {id} = request.body;

        const service = new DeleteUserService()
        const result = await service.execute(id)

        return response.json(result)
    }
}

export { DeleteTaskController }