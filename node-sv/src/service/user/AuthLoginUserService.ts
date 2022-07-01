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
                    const token = '545kadjijopad541a564dad6a4dad'
                
                return {user, token} 
            } 
                return authUser
        } catch (error) {
            alert('Auth not invalid!')
        }
    }
}

export { AuthLoginUserService }


