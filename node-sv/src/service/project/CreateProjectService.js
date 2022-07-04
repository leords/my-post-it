"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProjectService {
    async execute(author, name, description) {
        const newProject = await prisma_1.default.project.create({
            data: {
                author,
                name,
                description,
            },
        });
        return newProject;
    }
}
exports.CreateProjectService = CreateProjectService;
