import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../shared/service/api.service';
import { NotificationService } from '../../../shared/service/notification.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.scss'
})
export class RecoverComponent {
  email: string = '';

  constructor(
    public dialogRef: MatDialogRef<RecoverComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {}

  onSend(): void {
    const payload = {
      email: this.email
    };
    this.apiService.recover(payload).subscribe(
      (response: any) => {
        this.notificationService.notify('Email enviado com sucesso!', 'success');
        this.dialogRef.close();
      }, 
      (error) => {
        this.notificationService.notify('Erro ao realizar o envio de email: ' + error.message, 'error');
      }
    )
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
