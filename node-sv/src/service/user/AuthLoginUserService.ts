import prismaClient from "../../prisma";

class AuthLoginUserService {
    async execute(email: string, password: string){

        try {
            const authUser = await prismaClient.user.findUnique({
                where: {
                   email: email 
                },
            });
            
            if(authUser?.email == email && authUser?.password == password) {
                const user = {
                    id: authUser.id,
                    name: authUser.name,
                    email: authUser.email,
                }              
                return {user} 
            }
            
            return null

        } catch (error) {
            alert('Auth not invalid!')
        }
    }
}

export { AuthLoginUserService }


