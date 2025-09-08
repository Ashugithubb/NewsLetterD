import { Body, Controller, HttpCode, HttpStatus, Post, Req, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { CreateAuthDto } from './dto/create-auth.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() { email }, @Res({ passthrough: true }) res: Response) {
        const user = await this.authService.validateUser({ email });
        const payload = { id: user.id, email: user.email };

        return this.authService.login(payload, res);
    }

    @Post('logout')
    logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('access_token', {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            path: '/',
        });

        return { "msg": "Loged out succesfully" }
    }


}