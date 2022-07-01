"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ReadUserService {
    async executeAll() {
        const queryAllUser = await prisma_1.default.user.findMany();
        return queryAllUser;
    }
    async executeUnique(email) {
        const queryUniqueUser = await prisma_1.default.user.findUnique({
            where: {
                email: email,
            },
        });
        if (queryUniqueUser != null) {
            return true;
        }
        return false;
    }
}
exports.ReadUserService = ReadUserService;
