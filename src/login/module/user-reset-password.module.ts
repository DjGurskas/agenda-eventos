import { Module } from "@nestjs/common";
import { ResetPasswordController } from "../controller/user-reset-password.controller";
import { ResetPasswordService } from "../service/user-reset-password.service";


@Module({
    controllers: [ResetPasswordController],
  providers: [ResetPasswordService],
})

export class  UserResetPasswordModule{}