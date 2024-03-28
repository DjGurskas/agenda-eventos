import { CanActivate, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}


    async canActivate(context: any) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        await this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_SECRET
        });
        return true;
    } catch (error) {
        console.log(error);
        throw new UnauthorizedException('Token inválido');
    }

    private extractTokenFromHeader(request: any): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}