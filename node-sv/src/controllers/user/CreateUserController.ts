import { Response, Request, request } from "express"; 


class CreateUserController {
    async handle(resquest: Request, response: Response) {
        const {nome} = resquest.body
        const {sobrenome} = request.body
        const {email} = request.body
        const {senha} = request.body
    }


}

export { CreateUserController }