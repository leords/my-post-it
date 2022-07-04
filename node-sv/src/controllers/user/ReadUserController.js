"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUserController = void 0;
const ReadUserService_1 = require("../../service/user/ReadUserService");
class ReadUserController {
    async handleAll(request, response) {
        const service = new ReadUserService_1.ReadUserService();
        const result = await service.executeAll();
        return response.json(result);
    }
    async handleUnique(request, response) {
        const { email } = request.body;
        const service = new ReadUserService_1.ReadUserService();
        const result = await service.executeUnique(email);
        return response.json(result);
    }
}
exports.ReadUserController = ReadUserController;
