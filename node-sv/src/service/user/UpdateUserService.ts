import prismaClient from "../../prisma";


class UpdateUserService {

    async executeName(id: string, name_update: string) {
        const newUpdateUser = await prismaClient.user.update({
            where: {
                id: id,
            },
            data: {
                name: name_update
            },
        });
        return newUpdateUser
    }

    async executeEmail(id: string, email_update: string){
        const newUpdateUser = await prismaClient.user.update({
            where: {
                id: id,
            },
            data: {
                email: email_update
            },
        });
        return newUpdateUser
    }

    async executePassword(id: string, password_update: string){
        const newUpdateUser = await prismaClient.user.update({
            where: {
                id: id,
            },
            data: {
                password: password_update
            },
        });
        return newUpdateUser
    }
}

export { UpdateUserService }