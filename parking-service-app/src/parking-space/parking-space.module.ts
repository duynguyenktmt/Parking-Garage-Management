import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSpace } from './entities/parking-space.entity';
import { ParkingSpaceService } from './services/parking-space.service';
import { ParkingSpaceController } from './controllers/parking-space.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ParkingSpace])],
    providers: [ParkingSpaceService],
    controllers: [ParkingSpaceController],
})
export class ParkingModule {}