import {
    PrismaClient,
} from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
})

export const orm = prisma.$extends({
    query: {
        $allModels: {
            $allOperations: async ({ args, model, operation, query }) => {
                    return await query(args)
            },
        },
    },
})
