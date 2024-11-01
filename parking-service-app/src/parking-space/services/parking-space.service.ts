import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkingSpace } from '../entities/parking-space.entity';
import { ParkingSpaceRepository } from '../repositories/parking-space.repository';

@Injectable()
export class ParkingSpaceService {
    constructor(
        @InjectRepository(ParkingSpaceRepository)
        private readonly parkingSpaceRepository: ParkingSpaceRepository,
    ) {}

    async createParkingSpace(parkingSpaceData: Partial<ParkingSpace>): Promise<ParkingSpace> {
        const parkingSpace = this.parkingSpaceRepository.create(parkingSpaceData);
        return this.parkingSpaceRepository.save(parkingSpace);
    }

    async getAllParkingSpaces(): Promise<ParkingSpace[]> {
        return this.parkingSpaceRepository.find();
    }

    async getParkingSpaceById(id: number): Promise<ParkingSpace> {
        const parkingSpace = await this.parkingSpaceRepository.findOneBy({ id });
        return parkingSpace || new ParkingSpace();
        // return this.parkingSpaceRepository.findOneBy({ id });
    }

    async updateParkingSpace(id: number, updateData: Partial<ParkingSpace>): Promise<ParkingSpace> {
        await this.parkingSpaceRepository.update(id, updateData);
        return this.getParkingSpaceById(id);
    }

    async deleteParkingSpace(id: number): Promise<void> {
        await this.parkingSpaceRepository.delete(id);
    }
}