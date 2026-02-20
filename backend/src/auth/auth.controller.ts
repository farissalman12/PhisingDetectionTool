import { Controller, Post, Body, Request, UseGuards, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user); // Pass the user object with id/email/role
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register({
      email: registerDto.email,
      password_hash: registerDto.password, // Map password to password_hash
    });
  }
}
