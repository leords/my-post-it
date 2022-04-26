import prismaClient from "../../prisma";

class CreateUserService {
    async execute(name:string, email:string, password:string) {
        const newUser = await prismaClient.user.create({
            data: { 
                name,
                email, 
                password,  
            },
        });

        return newUser
    }
}

export { CreateUserService }