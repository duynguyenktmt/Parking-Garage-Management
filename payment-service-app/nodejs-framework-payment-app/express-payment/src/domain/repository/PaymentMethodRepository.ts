import AppDataSource from '../../infrastructure/in-mem-db';
import { PaymentMethod } from '../entity/PaymentMethod';

export class PaymentMethodRepository {
    getAllPaymentMethods = async () => {
        const paymentMethodRepository = AppDataSource.getRepository(PaymentMethod);
        return await paymentMethodRepository.find({ relations: ['user', 'paymentGateway'] });
    };
    getPaymentMethodById = async (id: number) => {
        const paymentMethodRepository = AppDataSource.getRepository(PaymentMethod);
        return await paymentMethodRepository.findOne({ where: { payment_method_id: id }, relations: ['user', 'paymentGateway'] });
    };
    createPaymentMethod = async (methodData: Partial<PaymentMethod>) => {
        const paymentMethodRepository = AppDataSource.getRepository(PaymentMethod);
        const paymentMethod = paymentMethodRepository.create(methodData);
        return await paymentMethodRepository.save(paymentMethod);
    };
    updatePaymentMethod = async (id: number, methodData: Partial<PaymentMethod>) => {
        const paymentMethodRepository = AppDataSource.getRepository(PaymentMethod);
        await paymentMethodRepository.update(id, methodData);
        return await this.getPaymentMethodById(id);
    };
    deletePaymentMethod = async (id: number) => {
        const paymentMethodRepository = AppDataSource.getRepository(PaymentMethod);
        return await paymentMethodRepository.delete(id);
    };
}