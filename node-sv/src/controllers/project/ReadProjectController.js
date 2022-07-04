"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadProjectController = void 0;
const ReadProjectService_1 = require("../../service/project/ReadProjectService");
class ReadProjectController {
    /* Retorna todos os projetos conforme as especificações */
    async handleAll(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.executeAll(id);
        return response.json(result);
    }
    async handleUnique(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.executeUnique(id);
        return response.json(result);
    }
    async handleAllOff(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.executeAllOff(id);
        return response.json(result);
    }
    async handleAllOn(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.executeAllOn(id);
        return response.json(result);
    }
    /* Contagem de projetos conforme as especificações */
    async handleCountAll(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.countAll(id);
        return response.json(result);
    }
    async handleCountAllOff(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.countAllOff(id);
        return response.json(result);
    }
    async handleCountAllOn(request, response) {
        const { id } = request.body;
        const service = new ReadProjectService_1.ReadProjectService();
        const result = await service.countAllOn(id);
        return response.json(result);
    }
}
exports.ReadProjectController = ReadProjectController;
