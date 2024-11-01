import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateParkingSpaceDto {
  @IsString()
  @IsOptional()
  location?: string;

  @IsNumber()
  @IsOptional()
  capacity?: number;
}