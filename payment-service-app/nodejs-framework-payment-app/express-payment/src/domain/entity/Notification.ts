// Notification.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    notification_id!: number;

    @Column()
    message!: string;

    @Column()
    timestamp!: Date;

    @Column({
        type: 'enum',
        enum: ['sent', 'pending', 'failed'],
    })
    status!: 'sent' | 'pending' | 'failed';

    @ManyToOne(() => User, user => user.notifications)
    user!: User;
}