"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCategory = exports.NotificationStage = void 0;
var NotificationStage = /** @class */ (function () {
    function NotificationStage() {
    }
    NotificationStage.PENDING_APPROVE = "PENDING_APPROVE";
    NotificationStage.WAITING_APPROVE = "WAITING_APPROVE";
    NotificationStage.READY = "READY";
    NotificationStage.QUEUED = "QUEUED";
    NotificationStage.SENT = "SENT";
    return NotificationStage;
}());
exports.NotificationStage = NotificationStage;
var NotificationCategory = /** @class */ (function () {
    function NotificationCategory() {
    }
    NotificationCategory.AUTO_SCHEDULE = "AUTO_SCHEDULE";
    NotificationCategory.DEMAND = "DEMAND";
    return NotificationCategory;
}());
exports.NotificationCategory = NotificationCategory;
