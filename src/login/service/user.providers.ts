import { User } from "../entities/user.entity";

export const UserProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: any) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE'],
    }
]