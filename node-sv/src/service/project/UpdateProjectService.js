"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateProjectService {
    async executeEditName(id_project, name_update) {
        const updateProject = await prisma_1.default.project.update({
            where: {
                id: id_project
            },
            data: {
                name: name_update,
            },
        });
        return updateProject;
    }
    async executeEditDescription(id_project, description_update) {
        const updateProject = await prisma_1.default.project.update({
            where: {
                id: id_project
            },
            data: {
                description: description_update
            },
        });
        return updateProject;
    }
    async executeEditStatus(id_project, status_project) {
        const updateProject = await prisma_1.default.project.update({
            where: {
                id: id_project
            },
            data: {
                status: status_project,
            },
        });
        return updateProject;
    }
}
exports.UpdateProjectService = UpdateProjectService;
