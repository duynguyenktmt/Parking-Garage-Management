import { PaymentMethod } from '../entity/PaymentMethod';
import { PaymentMethodRepository } from '../repository/PaymentMethodRepository';

const paymentMethodRepo = new PaymentMethodRepository();

export class PaymentMethodService {

    async createPaymentGateway(methodData: Partial<PaymentMethod>) {
        return await paymentMethodRepo.createPaymentMethod(methodData);
    }

    async getPaymentMethodById(id: number) {
        return await paymentMethodRepo.getPaymentMethodById(id);
    }

    async getAllPaymentMethods() {
        return await paymentMethodRepo.getAllPaymentMethods();
    }
}