import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';



@Injectable()
export class ResetPasswordService {
    private resetToken = new Map<string, string>();


    generateResetToken(email: string): string {
        const token = uuidv4();
        this.resetToken.set(email, token);
        return token;
    }

    verifyResetToken(email: string, token: string): boolean {
        const storedToken = this.resetToken.get(email);
        return storedToken === token;
    }

    resetPassword(email: string, newPassword: string): void {
        console.log(`A senha do usuário ${email} foi atualizada`)
        this.resetToken.delete(email);
    }
}