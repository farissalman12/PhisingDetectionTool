import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PhishingScanner } from '../core/services/PhishingScanner';

@Injectable()
export class ScanService {
  constructor(
    private prisma: PrismaService,
    private scanner: PhishingScanner,
  ) {}

  async scan(url: string, content?: string, userId?: string) {
    // 1. Run the PhishingScanner logic
    const result = await this.scanner.scan(url, content);

    // 2. Save the result to the database
    const savedScan = await this.prisma.scan.create({
      data: {
        input_content: url,
        risk_score: result.totalScore,
        verdict: result.verdict.toUpperCase(), // Store as string
        detailed_report: JSON.stringify(result), // Store as string for SQLite
        user_id: userId,
      },
    });

    return {
      id: savedScan.id,
      created_at: savedScan.created_at,
      input_content: url,
      risk_score: result.totalScore, // Explicitly map to snake_case for frontend compatibility
      ...result,
    };
  }

  async findOne(id: string) {
    return this.prisma.scan.findUnique({
      where: { id },
    });
  }

  async findAll(take: number = 10, skip: number = 0, userId?: string) {
    return this.prisma.scan.findMany({
      take,
      skip,
      where: userId ? { user_id: userId } : undefined,
      orderBy: { created_at: 'desc' },
    });
  }
}
