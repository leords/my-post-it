"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateTaskService {
    async executeName(id, name_update) {
        const taskUpdate = await prisma_1.default.task.update({
            where: {
                id: id
            },
            data: {
                name: name_update
            }
        });
        return taskUpdate;
    }
    async executeDescription(id, update_description) {
        const taskUpdate = await prisma_1.default.task.update({
            where: {
                id: id,
            },
            data: {
                description: update_description
            }
        });
        return taskUpdate;
    }
    async executeStatusforFalse(id) {
        const taskUpdate = await prisma_1.default.task.update({
            where: {
                id: id,
            },
            data: {
                status: false
            }
        });
        return taskUpdate;
    }
    async executeStatusforTrue(id) {
        const taskUpdate = await prisma_1.default.task.update({
            where: {
                id: id,
            },
            data: {
                status: true
            }
        });
        return taskUpdate;
    }
}
exports.UpdateTaskService = UpdateTaskService;
