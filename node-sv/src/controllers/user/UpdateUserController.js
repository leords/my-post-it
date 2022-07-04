"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const UpdateUserService_1 = require("../../service/user/UpdateUserService");
class UpdateUserController {
    async handleEditName(request, response) {
        const { id } = request.body;
        const { name } = request.body;
        const service = new UpdateUserService_1.UpdateUserService();
        const result = await service.executeName(id, name);
        return response.json(result);
    }
    async handleEditEmail(request, response) {
        const { id } = request.body;
        const { email } = request.body;
        const service = new UpdateUserService_1.UpdateUserService();
        const result = await service.executeEmail(id, email);
        return response.json(result);
    }
    async handleEditPassword(request, response) {
        const { id } = request.body;
        const { password } = request.body;
        const service = new UpdateUserService_1.UpdateUserService();
        const result = await service.executePassword(id, password);
        return response.json(result);
    }
}
exports.UpdateUserController = UpdateUserController;
