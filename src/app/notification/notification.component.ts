import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  notifications: { message: string; doNotDismiss: boolean }[];

  constructor(private notificationService: NotificationService) {
    this.notifications = notificationService.notifications;
  }

  ngOnInit(): void {
    // Dismiss notifications after 15 seconds if doNotDismiss flag is not set
    this.notifications.forEach((notification) => {
      if (!notification.doNotDismiss) {
        setTimeout(() => {
          const index = this.notifications.indexOf(notification);
          if (index > -1) {
            this.notifications.splice(index, 1);
          }
        }, 15000);
      }
    });
  }
}
