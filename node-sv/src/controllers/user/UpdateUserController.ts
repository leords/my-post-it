import { Response, Request, response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";



class SearchUserController{
    async handleEditName(response: Response, request: Request){
         const {email} = request.body;
         const {name} = request.body;

         const service = new UpdateUserService();
         const result = await service.executeName(email, name);

         return response.json(result)
    }


    async handleEditSurname(response: Response, request: Request){
         const {email} = request.body;
         const {surname} = request.body;

         const service = new UpdateUserService();
         const result = await service.executeSurname(email, surname);

         return response.json(result)
    }

    async handleEditEmail(response: Response, request: Request){
        const {email} = request.body;

        const service = new UpdateUserService();
        const result = await service.executeEmail(email, email);

        return response.json(result)
    }

    async handleEditPassword(response: Response, request: Request){
        const {email} = request.body;
        const {password} = request.body;
    
        const service = new UpdateUserService();
        const result = await service.executePassword(email, password);

        return response.json(result)
    }
    
}

export {SearchUserController}