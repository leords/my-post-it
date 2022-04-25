import prismaClient from "../../prisma";


class UpdateUserService {

    async executeName(id_email: string, name_update: string) {
        const newUpdateUser = await prismaClient.user.update({
            where: {
                email: id_email,
            },
            update: {
                name: name_update
            },
        });
        return newUpdateUser
    }

    async executeSurname(id_email: string, surname_update: string){
        const newUpdateUser = await prismaClient.user.update({
            where: {
                email: id_email
            },
            update: {
                surname: surname_update
            },
        });
        return newUpdateUser
    }

    async executeEmail(id_email: string, email_update: string){
        const newUpdateUser = await prismaClient.user.update({
            where: {
                email: id_email
            },
            update: {
                email: email_update
            },
        });
        return newUpdateUser
    }

    async executePassword(id_email: string, password_update: string){
        const newUpdateUser = await prismaClient.user.update({
            where: {
                email: id_email
            },
            update: {
                password: password_update
            },
        });
        return newUpdateUser
    }
}

export { UpdateUserService }