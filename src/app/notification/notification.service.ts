import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: { message: string; doNotDismiss: boolean }[] = [];

  // add to notifications
  add(message: string, doNotDismiss = false) {
    this.notifications.push({ message, doNotDismiss });
  }
}
