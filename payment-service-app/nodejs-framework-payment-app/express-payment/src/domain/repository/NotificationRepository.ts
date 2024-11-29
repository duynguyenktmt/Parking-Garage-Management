import AppDataSource from '../../infrastructure/in-mem-db';
import { Notification } from '../entity/Notification';

export class NotificationRepository {
    createNotification = async (notificationData: Partial<Notification>) => {
        const notificationRepository = AppDataSource.getRepository(Notification);
        const notification = notificationRepository.create(notificationData);
        return await notificationRepository.save(notification);
    };
    getNotificationById = async (id: number) => {
        const notificationRepository = AppDataSource.getRepository(Notification);
        return await notificationRepository.findOne({ where: { notification_id: id }, relations: ['user'] });
    };
    getAllNotifications = async () => {
        const notificationRepository = AppDataSource.getRepository(Notification);
        return await notificationRepository.find({ relations: ['user'] });
    };
    updateNotification = async (id: number, notificationData: Partial<Notification>) => {
        const notificationRepository = AppDataSource.getRepository(Notification);
        await notificationRepository.update(id, notificationData);
        return await this.getNotificationById(id);
    };
    deleteNotification = async (id: number) => {
        const notificationRepository = AppDataSource.getRepository(Notification);
        return await notificationRepository.delete(id);
    };
}