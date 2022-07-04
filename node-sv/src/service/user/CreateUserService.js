"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateUserService {
    async execute(name, email, password) {
        const newUser = await prisma_1.default.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        return newUser;
    }
}
exports.CreateUserService = CreateUserService;
