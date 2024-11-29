import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';
import { Merchant } from './Merchant';
import { Refund } from './Refund';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    transaction_id!: string; 

    @Column('decimal', { precision: 10, scale: 2 })
    amount!: number;

    @Column()
    currency!: string;

    //check this soon to make sure the type safety
    @Column({ type: 'enum', enum: ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'], default: 'PENDING' })
    status!: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';

    @ManyToOne(() => User, user => user.transactions)
    user!: User;

    @ManyToOne(() => Merchant, merchant => merchant.transactions)
    merchant!: Merchant;

    @OneToMany(() => Refund, refund => refund.transaction)
    refunds!: Refund[];

    @CreateDateColumn({ name: 'created_at' }) //specify the column names explicitly in entity
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    // Optional: Add any additional methods or validations
    isRefundable(): boolean {
        return this.status === 'COMPLETED' && this.refunds.length === 0;
    }
}