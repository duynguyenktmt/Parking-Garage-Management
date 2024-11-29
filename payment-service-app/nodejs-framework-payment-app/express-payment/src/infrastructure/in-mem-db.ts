import { DataSource } from 'typeorm';
import { User } from '../domain/entity/User'; // Adjust the import path as necessary
import { Merchant } from '../domain/entity/Merchant'; // Adjust the import path as necessary
import { Transaction } from '../domain/entity/Transaction'; // Adjust the import path as necessary
import { Refund } from '../domain/entity/Refund'; // Adjust the import path as necessary

const AppDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:', // This sets up the in-memory database
    synchronize: true, // Automatically create database schema on every application launch
    logging: true, // Enable logging for debugging
    entities: [User, Merchant, Transaction, Refund], // Add your entities here
});

export const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Error during Data Source initialization:', error);
    }
};

export default AppDataSource;