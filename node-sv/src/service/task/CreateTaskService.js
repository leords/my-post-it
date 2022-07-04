"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateTaskService {
    async execute(project, name, description, user) {
        const newTask = prisma_1.default.task.create({
            data: {
                project,
                name,
                description,
                user,
            },
        });
        return newTask;
    }
}
exports.CreateTaskService = CreateTaskService;
