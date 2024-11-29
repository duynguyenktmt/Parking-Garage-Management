import AppDataSource from '../../infrastructure/in-mem-db';
import { PaymentGateway } from '../entity/PaymentGateway';

export class PaymentGatewayRepository {
    getAllPaymentGateways = async () => {
        const paymentGatewayRepository = AppDataSource.getRepository(PaymentGateway);
        return await paymentGatewayRepository.find({ relations: ['paymentMethods'] });
    };
    getPaymentGatewayById = async (id: string) => {
        const paymentGatewayRepository = AppDataSource.getRepository(PaymentGateway);
        return await paymentGatewayRepository.findOne({ where: { gateway_id: id }, relations: ['paymentMethods'] });
    };
    createPaymentGateway = async (gatewayData: Partial<PaymentGateway>) => {
        const paymentGatewayRepository = AppDataSource.getRepository(PaymentGateway);
        const paymentGateway = paymentGatewayRepository.create(gatewayData);
        return await paymentGatewayRepository.save(paymentGateway);
    };
    updatePaymentGateway = async (id: string, gatewayData: Partial<PaymentGateway>) => {
        const paymentGatewayRepository = AppDataSource.getRepository(PaymentGateway);
        await paymentGatewayRepository.update(id, gatewayData);
        return await this.getPaymentGatewayById(id);
    };
    deletePaymentGateway = async (id: string) => {
        const paymentGatewayRepository = AppDataSource.getRepository(PaymentGateway);
        return await paymentGatewayRepository.delete(id);
    };
}