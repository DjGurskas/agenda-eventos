import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { User } from "./user.entity";


@Injectable()
export class UserDatasource {
    constructor(private dataSource: DataSource) {}

    async createMany(user: User[]) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save(user[0]);
            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        } finally {
            await queryRunner.release();
        }
    }
}