import { IRuleResult } from './IRuleResult';

export type ScanVerdict = 'safe' | 'suspicious' | 'phishing';

export interface IScanResult {
  totalScore: number;
  heuristicScore: number;
  reputationScore: number;
  aiScore: number;
  aiExplanation?: string;
  virusTotal?: any;
  rules: IRuleResult[];
  verdict: ScanVerdict;
}
