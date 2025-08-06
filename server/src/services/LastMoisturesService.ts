import prismaClient from "../prisma";

export class LastMoisturesService {
    async execute() {
        const moistures = await prismaClient.current_moisture.findMany({
            take: 5,
            orderBy: {
                data_hora: 'desc',
            },
        });

        return moistures;
    }
}