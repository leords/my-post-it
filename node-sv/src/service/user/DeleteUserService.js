"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteUserService {
    async execute(id) {
        // Apagando todas as tasks no projeto com id deste usuário.
        const DeleteAlltask = await prisma_1.default.task.deleteMany({
            where: {
                user: id
            },
        });
        // Apagando todas os projetos com id deste usuário.
        const DeleteAlltProject = await prisma_1.default.project.deleteMany({
            where: {
                author: id
            },
        });
        // Apagando o usuário.
        const DeleteUser = await prisma_1.default.user.delete({
            where: {
                id: id,
            },
        });
        return DeleteUser;
    }
}
exports.DeleteUserService = DeleteUserService;
