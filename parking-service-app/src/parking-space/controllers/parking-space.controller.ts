import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ParkingSpaceService } from '../services/parking-space.service';
import { CreateParkingSpaceDto } from '../dtos/create-parking-space.dto';
import { UpdateParkingSpaceDto } from '../dtos/update-parking-space.dto';
import { ParkingSpace } from '../entities/parking-space.entity';

@Controller('parking-spaces')
export class ParkingSpaceController {
  constructor(private readonly parkingSpaceService: ParkingSpaceService) {

  }
  @Post()
  async create(@Body() createParkingSpaceDto: CreateParkingSpaceDto): Promise<ParkingSpace> {
    return this.parkingSpaceService.createParkingSpace(createParkingSpaceDto);
  }
  @Get()
  async findAll(): Promise<ParkingSpace[]> {
    return this.parkingSpaceService.getAllParkingSpaces();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ParkingSpace> {
    const parkingSpace = await this.parkingSpaceService.getParkingSpaceById(id);
    if (!parkingSpace) {
      throw new NotFoundException('Parking Space Not Found');
    }
    return parkingSpace;
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateParkingSpaceDto: UpdateParkingSpaceDto): Promise<ParkingSpace> {
    const updatedParkingSpace = await this.parkingSpaceService.updateParkingSpace(id, updateParkingSpaceDto);
    if (!updatedParkingSpace) {
      throw new NotFoundException('Parking Space Not Found');
    }
    return updatedParkingSpace;
  }
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.parkingSpaceService.deleteParkingSpace(id);
    return result;
  }
}