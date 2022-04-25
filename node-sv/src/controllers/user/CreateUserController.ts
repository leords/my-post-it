import { Response, Request, request } from "express"; 
import { CreateUserService } from "../../service/user/CreateUserService";


class CreateUserController {
    async handle(request: Request, response: Response) {
        const {name} = request.body
        const {surname} = request.body
        const {email} = request.body
        const {password} = request.body

        const service = new CreateUserService()
        const result = await service.execute(name, surname, email, password);

        return response.json(result)
    }
}

export { CreateUserController }