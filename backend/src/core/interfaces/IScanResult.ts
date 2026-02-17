import { IRuleResult } from './IRuleResult';

export type ScanVerdict = 'safe' | 'suspicious' | 'phishing';

export interface IScanResult {
  totalScore: number;
  rules: IRuleResult[];
  verdict: ScanVerdict;
}
