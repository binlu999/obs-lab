export declare class NotificationStage {
    static PENDING_APPROVE: string;
    static WAITING_APPROVE: string;
    static READY: string;
    static QUEUED: string;
    static SENT: string;
}
export declare class NotificationCategory {
    static AUTO_SCHEDULE: string;
    static DEMAND: string;
}
export declare type Notification = {
    id: string;
    category: string;
    scheduledAt: string;
    stage: string;
    destination_groups?: string[];
    intiailed_by: string;
    approved_by?: string;
    approved_at?: string;
    tos: string[];
    from: string;
    template?: {
        name: string;
        value: {};
    };
    s3?: {
        subject: string;
        bucket: string;
        htmlKey: string;
        textKey: string;
    };
    raw?: {
        subject: string;
        text: string;
        html: string;
    };
    expiresAt: number;
};
//# sourceMappingURL=notification.d.ts.map