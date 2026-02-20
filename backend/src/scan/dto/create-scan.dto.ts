import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateScanDto {
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  url: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  aiScore?: number;

  @IsOptional()
  @IsString()
  aiExplanation?: string;
}
