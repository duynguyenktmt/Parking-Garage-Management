// AuditLog.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class AuditLog {
    @PrimaryGeneratedColumn()
    log_id!: number;

    @Column()
    action!: string;

    @CreateDateColumn()
    timestamp!: Date;

    @Column('text')
    details!: string;

    @ManyToOne(() => User, user => user.auditLogs)
    user!: User;
}