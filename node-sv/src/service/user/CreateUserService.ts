import prismaClient from "../../prisma";

class CreateUserService {
    async execute(name:string, email:string, password:string) {

        const authUser = await prismaClient.user.findUnique({
            where: {
               email: email 
            },
        });

        if (authUser?.email != email) {
            const newUser = await prismaClient.user.create({
                data: { 
                    name,
                    email, 
                    password,  
                },
            });
            return true //user
        } else {
            return false
        }
    }
}

export { CreateUserService }