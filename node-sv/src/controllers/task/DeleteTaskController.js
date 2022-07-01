"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskController = void 0;
const DeleteTaskService_1 = require("../../service/task/DeleteTaskService");
class DeleteTaskController {
    async handle(request, response) {
        const { id } = request.body;
        const service = new DeleteTaskService_1.DeleteTaskService();
        const result = await service.execute(id);
        return response.json(result);
    }
}
exports.DeleteTaskController = DeleteTaskController;
