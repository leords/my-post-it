import { Response, Request, response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";



class UpdateUserController{
    async handleEditName(request: Request, response: Response){
         const {id} = request.body;
         const {name} = request.body;

         const service = new UpdateUserService();
         const result = await service.executeName(id, name);

         return response.json(result)
    }

    async handleEditEmail(request: Request, response: Response){
        const {id} = request.body;
        const {email} = request.body;

        const service = new UpdateUserService();
        const result = await service.executeEmail(id, email);

        return response.json(result)
    }

    async handleEditPassword(request: Request, response: Response){
        const {id} = request.body;
        const {password} = request.body;
    
        const service = new UpdateUserService();
        const result = await service.executePassword(id, password);

        return response.json(result)
    }
    
}

export {UpdateUserController}