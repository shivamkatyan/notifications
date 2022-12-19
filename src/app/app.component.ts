import { Component, VERSION } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private notificationService: NotificationService) {
    this.notificationService.add('Notification 1');
    this.notificationService.add('Notification 2');
    this.notificationService.add('Notification 3', true);
  }
}
