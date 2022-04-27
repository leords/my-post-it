import { Request, Response } from "express";
import { ReadUserService } from "../../service/user/ReadUserService";

class ReadUserController{
    
    async handleAll(request: Request, response: Response){

        const service = new ReadUserService();
        const result = await service.executeAll()

        return response.json(result);
    }

    async handleUnique(request: Request, response:Response){
        const {id} = request.body;

        const service = new ReadUserService();
        const result = await service.executeUnique(id);

        return response.json(result)
    }
}

export { ReadUserController }