import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParkingSpace {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    location?: string;

    @Column()
    size?: string;

    @Column({ default: true })
    availability?: boolean;

    @Column('decimal')
    pricePerHour?: number;

    @Column({ nullable: true })
    reservedBy?: string; // Optional: to store the ID of the user who reserved the space

    @Column({ type: 'timestamp', nullable: true })
    reservedUntil?: Date; // Optional: to store the reservation expiration time
}