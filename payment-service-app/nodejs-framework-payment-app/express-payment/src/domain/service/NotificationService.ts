import { Notification } from '../entity/Notification';
import { NotificationRepository } from '../repository/NotificationRepository';

const notificationRepo = new NotificationRepository();

export class NotificationService {
    async createNotification(notificationData: Partial<Notification>) {
        return await notificationRepo.createNotification(notificationData);
    }

    async getNotificationById(id: number) {
        return await notificationRepo.getNotificationById(id);
    }

    async getAllNotifications() {
        return await notificationRepo.getAllNotifications();
    }
}