import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScanModule } from './scan/scan.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ScanModule, PrismaModule, UsersModule, AuthModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
