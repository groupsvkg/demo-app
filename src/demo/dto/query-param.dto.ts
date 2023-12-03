import { IsOptional, IsPositive, IsString } from 'class-validator';

export class QueryParamDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly decryption_key: string;

  @IsOptional()
  @IsPositive()
  skip: number;

  @IsOptional()
  @IsPositive()
  take: number;
}
