import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateParkingSpaceDto {
  @IsString()
  @IsNotEmpty()
  location?: string;

  @IsNumber()
  @IsNotEmpty()
  capacity?: number;
}