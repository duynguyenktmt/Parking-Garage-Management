import AppDataSource from '../../infrastructure/in-mem-db';
import { Transaction } from '../entity/Transaction';

export class TransactionRepository {
    getAllTransactions = async () => {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        return await transactionRepository.find({ relations: ['user', 'merchant'] });
    };
    getTransactionById = async (transaction_id: string) => {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        return await transactionRepository.findOne({ where: { transaction_id }, relations: ['user', 'merchant'] });
    };
    createTransaction = async (transactionData: Partial<Transaction>) => {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        const transaction = transactionRepository.create(transactionData);
        return await transactionRepository.save(transaction);
    };
    updateTransaction = async (id: string, transactionData: Partial<Transaction>) => {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        await transactionRepository.update(id, transactionData);
        return await this.getTransactionById(id);
    };
    deleteTransaction = async (id: number) => {
        const transactionRepository = AppDataSource.getRepository(Transaction);
        return await transactionRepository.delete(id);
    };   
}