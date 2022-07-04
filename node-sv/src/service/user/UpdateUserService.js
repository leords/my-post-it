"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateUserService {
    async executeName(id, name_update) {
        const newUpdateUser = await prisma_1.default.user.update({
            where: {
                id: id,
            },
            data: {
                name: name_update
            },
        });
        return newUpdateUser;
    }
    async executeEmail(id, email_update) {
        const newUpdateUser = await prisma_1.default.user.update({
            where: {
                id: id,
            },
            data: {
                email: email_update
            },
        });
        return newUpdateUser;
    }
    async executePassword(id, password_update) {
        const newUpdateUser = await prisma_1.default.user.update({
            where: {
                id: id,
            },
            data: {
                password: password_update
            },
        });
        return newUpdateUser;
    }
}
exports.UpdateUserService = UpdateUserService;
