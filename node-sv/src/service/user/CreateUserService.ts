import prismaClient from "../../prisma";

class CreateUserService {
    async execute(name:string, sobrenome:string, email:string, password:string) {
        const NewUser = await prismaClient.user.create({
            data: {
                name,
                sobrenome,
                email, 
                password,  
            },
        });

        return NewUser
    }
}

export { CreateUserService }