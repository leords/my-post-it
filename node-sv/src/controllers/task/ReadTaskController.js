"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadTaskController = void 0;
const ReadTaskService_1 = require("../../service/task/ReadTaskService");
class ReadTaskController {
    /* Retorna todas as tasks conforme as especificações */
    async handleAll(request, response) {
        const { id } = request.body;
        const service = new ReadTaskService_1.ReadTaskService();
        const result = await service.executeAllOfProject(id);
        return response.json(result);
    }
    async handleAllOff(request, response) {
        const { id } = request.body;
        const service = new ReadTaskService_1.ReadTaskService();
        const result = await service.executeAllOff(id);
        return response.json(result);
    }
    async handleAllOn(request, response) {
        const { id } = request.body;
        const service = new ReadTaskService_1.ReadTaskService();
        const result = await service.executeAllOn(id);
        return response.json(result);
    }
    /* Contatagem das tasks conforme as especificações */
    async handleCountAll(request, response) {
        const { id } = request.body;
        const service = new ReadTaskService_1.ReadTaskService();
        const result = await service.countAllOfProject(id);
        return response.json(result);
    }
    async handleCountAllOff(request, response) {
        const { id } = request.body;
        const service = new ReadTaskService_1.ReadTaskService();
        const result = await service.countAllOff(id);
        return response.json(result);
    }
    async handleCountAllOn(request, response) {
        const { id } = request.body;
        const service = new ReadTaskService_1.ReadTaskService();
        const result = await service.countAllOn(id);
        return response.json(result);
    }
}
exports.ReadTaskController = ReadTaskController;
