import AppDataSource from '../../infrastructure/in-mem-db';
import { Merchant } from '../entity/Merchant';

export class MerchantRepository {
    getAllMerchants = async () => {
        const merchantRepository = AppDataSource.getRepository(Merchant);
        return await merchantRepository.find({ relations: ['user', 'transaction'] });
    };
    getMerchantById = async (merchant_id: number) => {
        const merchantRepository = AppDataSource.getRepository(Merchant);
        return await merchantRepository.findOne({ where: { merchant_id }, relations: ['user', 'transaction'] });
    };
    createMerchant = async (merchantData: Partial<Merchant>) => {
        const merchantRepository = AppDataSource.getRepository(Merchant);
        const merchant = merchantRepository.create(merchantData);
        return await merchantRepository.save(merchant);
    };
    updateMerchant = async (id: number, merchantData: Partial<Merchant>) => {
        const merchantRepository = AppDataSource.getRepository(Merchant);
        await merchantRepository.update(id, merchantData);
        return await this.getMerchantById(id);
    };
    deleteMerchant = async (id: number) => {
        const merchantRepository = AppDataSource.getRepository(Merchant);
        return await merchantRepository.delete(id);
    };    
}