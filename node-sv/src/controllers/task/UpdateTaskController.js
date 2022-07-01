"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskController = void 0;
const UpdateTaskService_1 = require("../../service/task/UpdateTaskService");
class UpdateTaskController {
    async handleEditName(request, response) {
        const { id } = request.body;
        const { name } = request.body;
        const service = new UpdateTaskService_1.UpdateTaskService();
        const result = await service.executeName(id, name);
        return response.json(result);
    }
    async handleEditDescription(request, response) {
        const { id } = request.body;
        const { description } = request.body;
        const service = new UpdateTaskService_1.UpdateTaskService();
        const result = await service.executeDescription(id, description);
        return response.json(result);
    }
    async handleEditStatusFalse(request, response) {
        const { id } = request.body;
        const service = new UpdateTaskService_1.UpdateTaskService();
        const result = await service.executeStatusforFalse(id);
        return response.json(result);
    }
    async handleEditStatusTrue(request, response) {
        const { id } = request.body;
        const service = new UpdateTaskService_1.UpdateTaskService();
        const result = await service.executeStatusforTrue(id);
        return response.json(result);
    }
}
exports.UpdateTaskController = UpdateTaskController;
