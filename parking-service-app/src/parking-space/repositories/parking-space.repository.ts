import { EntityRepository, Repository } from 'typeorm';
import { ParkingSpace } from '../entities/parking-space.entity';

@EntityRepository(ParkingSpace)
export class ParkingSpaceRepository extends Repository<ParkingSpace> {
    // Custom methods can be added here if needed
}