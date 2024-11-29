import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Transaction } from './Transaction';

@Entity()
export class Refund {
    @PrimaryGeneratedColumn()
    refund_id!: number;

    @Column('decimal', { precision: 10, scale: 2 })
    amount!: number;

    @Column({ type: 'enum', enum: ['PENDING', 'COMPLETED', 'FAILED'], default: 'PENDING' })
    status!: 'PENDING' | 'COMPLETED' | 'FAILED';

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @ManyToOne(() => Transaction, transaction => transaction.refunds)
    transaction!: Transaction;
}