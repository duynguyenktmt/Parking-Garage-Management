import AppDataSource from '../../infrastructure/in-mem-db';
import { Refund } from '../entity/Refund';

export class RefundRepository {
    createRefund = async (refundData: Partial<Refund>) => {
        const refundRepository = AppDataSource.getRepository(Refund);
        const refund = refundRepository.create(refundData);
        return await refundRepository.save(refund);
    };
    getRefundById = async (id: number) => {
        const refundRepository = AppDataSource.getRepository(Refund);
        return await refundRepository.findOne({ where: { refund_id: id }, relations: ['transaction'] });
    };
    getAllRefunds = async () => {
        const refundRepository = AppDataSource.getRepository(Refund);
        return await refundRepository.find({ relations: ['transaction'] });
    };
    updateRefund = async (id: number, refundData: Partial<Refund>) => {
        const refundRepository = AppDataSource.getRepository(Refund);
        await refundRepository.update(id, refundData);
        return await this.getRefundById(id);
    };
    deleteRefund = async (id: number) => {
        const refundRepository = AppDataSource.getRepository(Refund);
        return await refundRepository.delete(id);
    };    
}