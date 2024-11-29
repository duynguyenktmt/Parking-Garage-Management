import { Merchant } from '../entity/Merchant';
import { MerchantRepository } from '../repository/MerchantRepository';

const merchantRepo = new MerchantRepository();

export class MerchantService {
    async createMerchant(merchantData: Partial<Merchant>) {
        return await merchantRepo.createMerchant(merchantData);
    }

    async getMerchantById(id: number) {
        return await merchantRepo.getMerchantById(id);
    }

    async getAllMerchants() {
        return await merchantRepo.getAllMerchants();
    }

    async updateMerchant(id: number, merchantData: Partial<Merchant>) {
        return await merchantRepo.updateMerchant(id, merchantData);
    }

    async deleteMerchant(id: number) {
        return await merchantRepo.deleteMerchant(id);
    }
}