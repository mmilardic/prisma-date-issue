import { Prisma } from '@prisma/client'
import { orm } from './orm'

export const UserFactory = {
    create: async (input?: Partial<Prisma.usersCreateInput>) => {
        return orm.users.create({
            data: {
                name: "name",
                updated_at: new Date(),
                ...input,
            },
        })
    },
}
