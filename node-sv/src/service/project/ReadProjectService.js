"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ReadProjectService {
    /* FUNÇÃO FINDMANY - RETORNA OS PROJETOS CONFORME A ESPECIFICAÇÃO */
    // Todos os projetos, cadastrados pelo o usuário.
    async executeAll(id_project) {
        const readProject = await prisma_1.default.project.findMany({
            where: {
                author: id_project
            }
        });
        return readProject;
    }
    // Buscando por apenas um projeto.
    async executeUnique(id_project) {
        const readProject = await prisma_1.default.project.findUnique({
            where: {
                id: id_project
            },
        });
        return readProject;
    }
    // Todos os projetos desativados, cadastrados por usuário.
    async executeAllOff(id_project) {
        const readProject = await prisma_1.default.project.findMany({
            where: {
                author: id_project,
                status: false
            }
        });
        return readProject;
    }
    // Todos os projetos ativados, cadastrados por usuário.
    async executeAllOn(id_project) {
        const readProject = await prisma_1.default.project.findMany({
            where: {
                author: id_project,
                status: true
            }
        });
        return readProject;
    }
    /* FUNÇÃO COUNT - RETORNA A QUANTIDADE DE PROJETOS CONFORME A ESPECIFICAÇÃO */
    // Quantidade de projetos, cadastrados pelo o usuário.
    async countAll(id_project) {
        const readProject = await prisma_1.default.project.count({
            where: {
                author: id_project
            }
        });
        return readProject;
    }
    // Quantidade de projetos desativados, cadastrados por usuário.
    async countAllOff(id_project) {
        const readProject = await prisma_1.default.project.count({
            where: {
                author: id_project,
                status: false
            }
        });
        return readProject;
    }
    // Quantidade de projetos ativados, cadastrados por usuário.
    async countAllOn(id_project) {
        const readProject = await prisma_1.default.project.count({
            where: {
                author: id_project,
                status: true
            }
        });
        return readProject;
    }
}
exports.ReadProjectService = ReadProjectService;
