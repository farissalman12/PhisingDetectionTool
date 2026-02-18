import { Module } from '@nestjs/common';
import { PhishingScanner } from './services/PhishingScanner';
import { ReputationService } from './services/ReputationService';
import { AiAnalysisService } from './services/AiAnalysisService';

@Module({
  providers: [PhishingScanner, ReputationService, AiAnalysisService],
  exports: [PhishingScanner, ReputationService, AiAnalysisService],
})
export class CoreModule {}
