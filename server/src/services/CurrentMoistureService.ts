import prismaClient from "../prisma";

export class CurrentMoistureService {
    async execute() {
        const moisture = await prismaClient.current_moisture.findFirst({
            orderBy: {
                data_hora: 'desc',
            },
        });

        return moisture;
    }
}