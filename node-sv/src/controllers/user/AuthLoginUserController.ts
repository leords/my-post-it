import { Response, Request, NextFunction } from "express"; 
import { AuthLoginUserService } from "../../service/user/AuthLoginUserService";


class AuthLoginUserController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const {email} = request.body
        const {password} = request.body

        const service = new AuthLoginUserService()
        const result = await service.execute(email, password);

        return response.json(result)
    }
}

export { AuthLoginUserController }