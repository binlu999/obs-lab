export class NotificationStage {
    static PENDING_APPROVE = "PENDING_APPROVE";
    static WAITING_APPROVE = "WAITING_APPROVE";
    static READY = "READY";
    static QUEUED = "QUEUED";
    static SENT = "SENT";
}

export class NotificationCategory {
    static AUTO_SCHEDULE="AUTO_SCHEDULE";
    static DEMAND="DEMAND";
}

export type Notification = {
    id: string, //Partition Key
    category: string,
    scheduledAt: string, //index sort key
    stage: string, //index partition key
    destination_groups?: string[],
    intiailed_by: string,
    approved_by?: string,
    approved_at?: string,
    tos: string[],
    from: string,
    template?: {
        name: string,
        value: {}
    },
    s3?: {
        subject: string,
        bucket: string,
        htmlKey: string,
        textKey: string
    },
    raw?: {
        subject: string,
        text: string,
        html: string,
    },
    expiresAt: number
}