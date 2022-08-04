"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));


class AuthLoginUserService {
    async execute(email, password) {
        try {
            const authUser = await prisma_1.default.user.findUnique({
                where: {
                    email: email
                },
            });
            if ((authUser === null || authUser === void 0 ? void 0 : authUser.email) == email && (authUser === null || authUser === void 0 ? void 0 : authUser.password) == password) {
                const user = {
                    id: authUser.id,
                    name: authUser.name,
                    email: authUser.email,
                };
                return {user};
            }
            return null;
        }
        catch (error) {
            alert('Auth not invalid!');
        }
    }
}
exports.AuthLoginUserService = AuthLoginUserService;
