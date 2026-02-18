import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ScanService } from './scan.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { CreateScanDto } from './dto/create-scan.dto';

@Controller('api/v1/scan')
export class ScanController {
  constructor(
    private readonly scanService: ScanService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  async create(@Body() createScanDto: CreateScanDto, @Request() req?: any) {
    // Manually extract token if present to support optional auth without rejecting
    let userId = undefined;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = this.jwtService.verify(token);
        userId = decoded.sub; // 'sub' is userId in our JWT strategy
      } catch (e) {
        // Invalid token, treat as anonymous
      }
    }
    return this.scanService.scan(
      createScanDto.url,
      createScanDto.content,
      userId,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scanService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Request() req: any,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const take = limit ? parseInt(limit) : 10;
    const skip = offset ? parseInt(offset) : 0;
    return this.scanService.findAll(take, skip, req.user.userId);
  }
}
