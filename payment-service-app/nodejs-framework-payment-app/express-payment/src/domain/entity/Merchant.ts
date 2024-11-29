// Merchant.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../entity/User';
import { Transaction } from '../entity/Transaction';

@Entity()
export class Merchant {
    @PrimaryGeneratedColumn()
    merchant_id!: number;

    @Column({ name: 'business_name' })
    businessName!: string;

    @Column({ name: 'business_address' })
    businessAddress!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToOne(() => User, (user: User) => user.merchant)
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @OneToMany(() => Transaction, transaction => transaction.merchant)
    transactions!: Transaction[];
}