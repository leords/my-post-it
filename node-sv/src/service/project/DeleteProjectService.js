"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteProjectService {
    async execute(id_project) {
        // Apagando todas as tasks no id deste projeto.
        const DeleteAlltask = await prisma_1.default.task.deleteMany({
            where: {
                project: id_project
            },
        });
        const DeleteProject = await prisma_1.default.project.delete({
            where: {
                id: id_project,
            },
        });
        return DeleteProject;
    }
}
exports.DeleteProjectService = DeleteProjectService;
