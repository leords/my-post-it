import prismaClient from "../../prisma";

class ReadUserService {
    async executeAll() {
        const queryAllUser = await prismaClient.user.findMany({
            take: 50,
            orderBy: {
                date: "desc"
            }
        });
        return queryAllUser
    }

    async executeUnique(id_email: string) {
        const queryUniqueUser = await prismaClient.user.findUnique({
            where: {
                email: id_email,
            },
        });
        return queryUniqueUser
    }
}

export { ReadUserService }