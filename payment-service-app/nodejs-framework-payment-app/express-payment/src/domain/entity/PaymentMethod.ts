// PaymentMethod.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { PaymentGateway } from './PaymentGateway';
import { User } from './User';

@Entity()
export class PaymentMethod {
    @PrimaryGeneratedColumn()
    payment_method_id!: number;

    @ManyToOne(() => User, (user: User) => user.paymentMethods)
    user!: User;

    @Column({
        type: 'enum',
        enum: ['credit_card', 'debit_card', 'bank_transfer', 'digital_wallet'],
    })
    method_type!: 'credit_card' | 'debit_card' | 'bank_transfer' | 'digital_wallet';

    @Column()
    card_number!: string; // Should be encrypted/tokenized

    @Column()
    expiration_date!: Date;

    @Column()
    cvv!: string; // Should be encrypted/tokenized

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @ManyToOne(() => PaymentGateway, paymentGateway => paymentGateway.paymentMethods)
    paymentGateway!: PaymentGateway;
}