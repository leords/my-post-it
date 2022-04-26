import { Response, Request, request } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";


class DeleteUserController {
    async handle(response: Response, request: Request){
        const {id} = request.body

        const service = new DeleteUserService();
        const result = await service.execute(id)

        return response.json(result);

    }
}

export { DeleteUserController }