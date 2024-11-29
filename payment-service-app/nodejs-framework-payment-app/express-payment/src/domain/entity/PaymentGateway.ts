import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { PaymentMethod } from './PaymentMethod';

@Entity()
export class PaymentGateway {
    @PrimaryGeneratedColumn('uuid')
    gateway_id!: string;

    @Column()
    name!: string;

    @Column()
    api_key!: string;

    @Column()
    api_secret!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToMany(() => PaymentMethod, paymentMethod => paymentMethod.paymentGateway)
    paymentMethods!: PaymentMethod[]; // A payment gateway can have many payment methods
}