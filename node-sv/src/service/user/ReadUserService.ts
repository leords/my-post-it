import prismaClient from "../../prisma";

class ReadUserService {
    
    async executeAll() {
        const queryAllUser = await prismaClient.user.findMany();
        
        return queryAllUser
    }

    async executeUnique(email: string) {
        const queryUniqueUser = await prismaClient.user.findUnique({
            where: {
                email: email,
            },
        });
        
        if(queryUniqueUser != null) {
            return true
        } 

        return false
    }
}

export { ReadUserService }