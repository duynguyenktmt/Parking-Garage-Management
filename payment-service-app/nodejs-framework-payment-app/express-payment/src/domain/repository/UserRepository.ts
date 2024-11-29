import AppDataSource from '../../infrastructure/in-mem-db';
import { User } from '../entity/User';

export class UserRepository {
    getUsers = async () => {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.find({ relations: ['merchant', 'transaction'] });
    };
    getUserById = async (user_id: number) => {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.findOne({ where: { user_id }, relations: ['merchant', 'transaction'] });
    };
    createUser  = async (userData: Partial<User>) => {
        const userRepository = AppDataSource.getRepository(User);
        const user = userRepository.create(userData);
        return await userRepository.save(user);
    };    
    updateUser = async (id: number, userData: Partial<User>) => {
        const userRepository = AppDataSource.getRepository(User);
        await userRepository.update(id, userData);
        return await this.getUserById(id);
    };
    deleteUser = async (id: number) => {
        const userRepository = AppDataSource.getRepository(User);
        return await userRepository.delete(id);
    };
    // async findByUsername(username: string): Promise<User | null> {
    //     const user = await AppDataSource.get(`SELECT * FROM User WHERE username = ?`, [username]);
    //     return user ? new User() : null;
    // }
}