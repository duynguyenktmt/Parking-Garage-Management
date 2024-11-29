import { AuditLog } from '../entity/AuditLog';
import { AuditLogRepository } from '../repository/AuditLogRepository';

const auditLogRepo = new AuditLogRepository();

export class AuditLogService {
    async createAuditLog(logData: Partial<AuditLog>) {
        return await auditLogRepo.createAuditLog(logData);
    }

    async getAuditLogById(id: number) {
        return await auditLogRepo.getAuditLogById(id);
    }

    async getAllAuditLogs() {
        return await auditLogRepo.getAllAuditLogs();
    }
}