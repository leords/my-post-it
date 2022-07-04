"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskController = void 0;
const CreateTaskService_1 = require("../../service/task/CreateTaskService");
class CreateTaskController {
    async handle(request, response) {
        const { project } = request.body;
        const { name } = request.body;
        const { description } = request.body;
        const { user } = request.body;
        const service = new CreateTaskService_1.CreateTaskService();
        const result = await service.execute(project, name, description, user);
        return response.json(result);
    }
}
exports.CreateTaskController = CreateTaskController;
