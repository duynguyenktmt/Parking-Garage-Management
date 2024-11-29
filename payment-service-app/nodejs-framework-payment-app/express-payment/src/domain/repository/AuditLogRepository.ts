import AppDataSource from '../../infrastructure/in-mem-db';
import { AuditLog } from '../entity/AuditLog';

export class AuditLogRepository {
    getAllAuditLogs = async () => {
        const auditLogRepository = AppDataSource.getRepository(AuditLog);
        return await auditLogRepository.find({ relations: ['user'] });
    };
    getAuditLogById = async (id: number) => {
        const auditLogRepository = AppDataSource.getRepository(AuditLog);
        return await auditLogRepository.findOne({ where: { log_id: id }, relations: ['user'] });
    };
    createAuditLog = async (logData: Partial<AuditLog>) => {
        const auditLogRepository = AppDataSource.getRepository(AuditLog);
        const auditLog = auditLogRepository.create(logData);
        return await auditLogRepository.save(auditLog);
    };
    updateAuditLog = async (id: number, logData: Partial<AuditLog>) => {
        const auditLogRepository = AppDataSource.getRepository(AuditLog);
        await auditLogRepository.update(id, logData);
        return await this.getAuditLogById(id);
    }; 
    deleteAuditLog = async (id: number) => {
        const auditLogRepository = AppDataSource.getRepository(AuditLog);
        return await auditLogRepository.delete(id);
    };
}