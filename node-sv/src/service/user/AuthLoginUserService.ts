import prismaClient from "../../prisma";


class AuthLoginUserService {
    async execute(email: string, password: string){


        try {
            const authUser = await prismaClient.user.findUnique({
                where: {
                   email: email 
                },
            });
            
            if(authUser?.email == email && authUser?.password) {
                return authUser
            } 
        
        } catch (error) {
            alert('Auth not invalid!')
        }
    }
}

export { AuthLoginUserService }


