import { User } from '../entity/User';
import { UserRepository } from '../repository/UserRepository';

const userRepo = new UserRepository();

export class UserService {
    async createUser (userData: Partial<User>) {
        return await userRepo.createUser(userData);
    }

    async getUserById(id: number) {
        return await userRepo.getUserById(id);
    }

    async getUsers() {
        return await userRepo.getUsers();
    }

    async updateUser (id: number, userData: Partial<User>) {
        return await userRepo.updateUser(id, userData);
    }

    async deleteUser (id: number) {
        return await userRepo.deleteUser(id);
    }
}