import { PaymentGateway } from '../entity/PaymentGateway';
import { PaymentGatewayRepository } from '../repository/PaymentGatewayRepository';

const paymentGatewayRepo = new PaymentGatewayRepository();

export class PaymentGatewayService {

    async createPaymentGateway(gatewayData: Partial<PaymentGateway>) {
        return await paymentGatewayRepo.createPaymentGateway(gatewayData);
    }

    async getPaymentGatewayById(id: string) {
        return await paymentGatewayRepo.getPaymentGatewayById(id);
    }

    async getAllPaymentGateways() {
        return await paymentGatewayRepo.getAllPaymentGateways();
    }
}