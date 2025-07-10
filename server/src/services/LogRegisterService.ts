import prismaClient from "../prisma";

export class LogRegisterService {
    async execute() {
        const log_registers = await prismaClient.log_register.findMany({
            orderBy: {
                data_hora: 'desc'
            },
        });

        return log_registers;
    };
};