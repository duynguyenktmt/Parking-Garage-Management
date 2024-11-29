import { Transaction } from '../entity/Transaction';
import { TransactionRepository } from '../repository/TransactionRepository';

const txnRepo = new TransactionRepository();

export class TransactionService {
    async createTransaction(transactionData: Partial<Transaction>) {
        return await txnRepo.createTransaction(transactionData);
    }

    async getTransactionById(id: string) {
        return await txnRepo.getTransactionById(id);
    }

    async getAllTransactions() {
        return await txnRepo.getAllTransactions();
    }

    async updateTransaction(id: string, transactionData: Partial<Transaction>) {
        return await txnRepo.updateTransaction(id, transactionData);
    }

    async deleteTransaction(id: number) {
        return await txnRepo.deleteTransaction(id);
    }
}