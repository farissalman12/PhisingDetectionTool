import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateScanDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsString()
  content?: string;
}
