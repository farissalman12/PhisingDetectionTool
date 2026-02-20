export interface IScanRequest {
  url: string;
  content?: string; // Email body or other text content
  aiScore?: number;
  aiExplanation?: string;
}
