import prismaClient from "../prisma";

export class LastLogService {
    async execute() {
        const log = await prismaClient.log_register.findFirst({
            orderBy: {
                data_hora: 'desc',
            },
        });

        return log;
    }
}