import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new Subject<{ message: string; type: string }>();
  notification$ = this.notificationSubject.asObservable();

  notify(message: string, type: 'success' | 'error') {
    this.notificationSubject.next({ message, type });
    setTimeout(() => {
      this.notificationSubject.next({ message: '', type: '' });
    }, 3000);
  }
}
