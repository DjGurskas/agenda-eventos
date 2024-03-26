

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ResetPasswordService } from "../service/user-reset-password.service";


@Controller('reset-password')
export class ResetPasswordController {
  constructor(private readonly resetPasswordService: ResetPasswordService) {}

  /*@Get('email/forgot-password/:email')
  public async sendEmailForgotPassword(@Param() params): Promise<any>{
    try {
      var isEmailSent = await this.authService.sendEmailForgotPassword(
        params.email
      );
      if (isEmailSent) {
        return new ResponseSuccess('LOGIN.EMAIL_PRESENT', null);
      }
    }

  }*/
  


  @Post()
  requestReset(@Body('email') email: string): string {
    const token = this.resetPasswordService.generateResetToken(email);
    //
    return 'Um e-mail com instruções para redefinir a senha foi enviado.';
  }

  @Post('/verify')
  verifyResetToken(
    @Body('email') email: string,
    @Body('token') token: string,
  ): string {
    const isValid = this.resetPasswordService.verifyResetToken(email, token);
    if (isValid) {
      //
      return 'Token válido. Você pode redefinir sua senha agora.';
    } else {
      return 'Token inválido. Por favor, verifique seu e-mail e tente novamente.';
    }
  }

  @Post('/reset')
  resetPassword(
    @Body('email') email: string,
    @Body('token') token: string,
    @Body('newPassword') newPassword: string,
  ): string {
    const isValid = this.resetPasswordService.verifyResetToken(email, token);
    if (isValid) {
      this.resetPasswordService.resetPassword(email, newPassword);
      return 'Sua senha foi redefinida com sucesso.';
    } else {
      return 'Token inválido. Por favor, verifique seu e-mail e tente novamente.';
    }
  }
}
