"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const DeleteUserService_1 = require("../../service/user/DeleteUserService");
class DeleteUserController {
    async handle(request, response) {
        const { id } = request.body;
        const service = new DeleteUserService_1.DeleteUserService();
        const result = await service.execute(id);
        return response.json(result);
    }
}
exports.DeleteUserController = DeleteUserController;
