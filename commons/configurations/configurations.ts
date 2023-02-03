export type ConfigurationType={
    notificationScheduleExp:string
}

export type Configurations={
    [key:string]:ConfigurationType
}

export const AppConfigurations: Configurations = {
    "mob": {
        notificationScheduleExp: "cron(0/1 * * * ? *)"
    }
}