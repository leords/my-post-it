import prismaClient from "../../prisma";

class ReadUserService {
    async executeAll() {
        const queryAllUser = await prismaClient.user.findMany();
        
        return queryAllUser
    }

    async executeUnique(id: string) {
        const queryUniqueUser = await prismaClient.user.findUnique({
            where: {
                id: id,
            },
        });
        return queryUniqueUser
    }
}

export { ReadUserService }