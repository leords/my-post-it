"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginUserController = void 0;
const AuthLoginUserService_1 = require("../../service/user/AuthLoginUserService");
class AuthLoginUserController {
    async handle(request, response, next) {
        const { email } = request.body;
        const { password } = request.body;
        const service = new AuthLoginUserService_1.AuthLoginUserService();
        const result = await service.execute(email, password);
        return response.json(result);
    }
}
exports.AuthLoginUserController = AuthLoginUserController;
