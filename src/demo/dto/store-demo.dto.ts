import { IsNotEmpty, IsString } from 'class-validator';

export class StoreDemoDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly encryption_key: string;

  @IsNotEmpty()
  readonly value: unknown;
}
