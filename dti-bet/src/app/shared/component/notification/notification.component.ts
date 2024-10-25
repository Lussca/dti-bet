import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notification',
  template: `
    <div
      class="notification"
      *ngIf="message"
      [ngStyle]="{
        'background-color': type === 'success' ? '#dff0d8' : '#f8d7da',
        color: type === 'success' ? '#3c763d' : '#721c24',
        border: type === 'success' ? '1px solid #d6e9c6' : '1px solid #f5c6cb'
      }"
    >
      {{ message }}
    </div>
  `,
  styles: [
    `
      .notification {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        z-index: 1000;
        text-align: center;
        width: 90%;
        max-width: 500px;
        font-weight: bold;
      }
    `,
  ],
})
export class NotificationComponent implements OnInit {
  message: string = '';
  type: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notification) => {
      this.message = notification.message;
      this.type = notification.type;
      if (notification.message) {
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    });
  }
}
