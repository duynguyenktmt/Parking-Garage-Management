// src/services/refundService.ts
import { Refund } from '../entity/Refund';
import { RefundRepository } from '../repository/RefundRepository';

const refundRepo = new RefundRepository();

export class RefundService {
    async createRefund(refundData: Partial<Refund>) {
        return await refundRepo.createRefund(refundData);
    }

    async getRefundById(id: number) {
        return await refundRepo.getRefundById(id);
    }

    async getAllRefunds() {
        return await refundRepo.getAllRefunds();
    }
}