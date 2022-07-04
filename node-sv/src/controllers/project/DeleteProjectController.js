"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProjectController = void 0;
const DeleteProjectService_1 = require("../../service/project/DeleteProjectService");
class DeleteProjectController {
    async handle(request, response) {
        const { id } = request.body;
        const service = new DeleteProjectService_1.DeleteProjectService();
        const result = await service.execute(id);
        return response.json(result);
    }
}
exports.DeleteProjectController = DeleteProjectController;
