"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectController = void 0;
const CreateProjectService_1 = require("../../service/project/CreateProjectService");
class CreateProjectController {
    async handle(request, response) {
        const { author } = request.body;
        const { name } = request.body;
        const { description } = request.body;
        const service = new CreateProjectService_1.CreateProjectService();
        const result = await service.execute(author, name, description);
        return response.json(result);
    }
}
exports.CreateProjectController = CreateProjectController;
