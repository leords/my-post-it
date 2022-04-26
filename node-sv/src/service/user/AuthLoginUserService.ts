import prismaClient from "../../prisma";


class AuthLoginUserService {
    async execute(email: string, password: string){

        try {
            const authUser = await prismaClient.user.findFirst({
                where: {
                    email: email,
                    password: password
                },
            });
    
            return authUser?.id    
        } catch (error) {
            return alert('Is not valid!')
        }
    }
}

export { AuthLoginUserService }

