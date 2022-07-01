"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectController = void 0;
const UpdateProjectService_1 = require("../../service/project/UpdateProjectService");
class UpdateProjectController {
    async handleEditName(request, response) {
        const { id } = request.body;
        const { name } = request.body;
        const service = new UpdateProjectService_1.UpdateProjectService();
        const result = await service.executeEditName(id, name);
        return response.json(result);
    }
    async handleEditDescription(request, response) {
        const { id } = request.body;
        const { name } = request.body;
        const { description } = request.body;
        const service = new UpdateProjectService_1.UpdateProjectService();
        const result = await service.executeEditDescription(id, description);
        return response.json(result);
    }
    async handleEditStatus(request, response) {
        const { id } = request.body;
        const { status } = request.body;
        const service = new UpdateProjectService_1.UpdateProjectService();
        const result = await service.executeEditStatus(id, status);
        return response.json(result);
    }
}
exports.UpdateProjectController = UpdateProjectController;
