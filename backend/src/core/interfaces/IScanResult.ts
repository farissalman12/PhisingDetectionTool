import { IRuleResult } from './IRuleResult';

export type ScanVerdict = 'safe' | 'suspicious' | 'phishing';

export interface IScanResult {
  totalScore: number;
  heuristicScore: number;
  reputationScore: number;
  aiScore: number;
  aiExplanation?: string;
  rules: IRuleResult[];
  verdict: ScanVerdict;
}
