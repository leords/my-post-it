"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteTaskService {
    async execute(id) {
        const DeleteTask = await prisma_1.default.task.delete({
            where: {
                id: id,
            },
        });
        return DeleteTask;
    }
}
exports.DeleteTaskService = DeleteTaskService;
