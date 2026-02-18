export interface IRuleResult {
  ruleName: string;
  score: number; // 0 to 100
  details: string; // Explanation of why this rule triggered
}
