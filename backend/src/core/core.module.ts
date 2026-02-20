import { Module } from '@nestjs/common';
import { PhishingScanner } from './services/PhishingScanner';
import { ReputationService } from './services/ReputationService';
import { AiAnalysisService } from './services/AiAnalysisService';
import { VirusTotalService } from './services/VirusTotalService';

@Module({
  providers: [PhishingScanner, ReputationService, AiAnalysisService, VirusTotalService],
  exports: [PhishingScanner, ReputationService, AiAnalysisService, VirusTotalService],
})
export class CoreModule {}
