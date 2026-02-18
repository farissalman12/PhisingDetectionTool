import { IScanRequest } from './IScanRequest';
import { IRuleResult } from './IRuleResult';

export interface IRule {
  scan(input: IScanRequest): Promise<IRuleResult | null>;
}
