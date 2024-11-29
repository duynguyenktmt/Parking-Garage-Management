import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Merchant } from './Merchant';
import { PaymentMethod } from './PaymentMethod';
import { Transaction } from './Transaction';
import { AuditLog } from './AuditLog';
import { Notification } from './Notification';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

    @Column({ unique: true })
    email!: string;

    @Column({
        type: 'enum',
        enum: ['customer', 'merchant', 'admin'],
    })
    role!: 'customer' | 'merchant' | 'admin';

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToOne(() => Merchant, merchant => merchant.user)
    //@JoinColumn({ name: 'merchant_id' })
    merchant!: Merchant;

    @OneToMany(() => PaymentMethod, paymentMethod => paymentMethod.user)
    paymentMethods!: PaymentMethod[];

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions!: Transaction[];

    @OneToMany(() => AuditLog, auditLog => auditLog.user)
    auditLogs!: AuditLog[];

    @OneToMany(() => Notification, notification => notification.user)
    notifications!: Notification[];
}