"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../service/user/CreateUserService");
class CreateUserController {
    async handle(request, response) {
        const { name } = request.body;
        const { email } = request.body;
        const { password } = request.body;
        const service = new CreateUserService_1.CreateUserService();
        const result = await service.execute(name, email, password);
        return response.json(result);
    }
}
exports.CreateUserController = CreateUserController;
