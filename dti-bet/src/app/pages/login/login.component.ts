import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/service/api.service';
import { NotificationService } from '../../shared/service/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { RecoverComponent } from './recover/recover.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private form: FormBuilder,
    private dialog: MatDialog,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.form.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const main = document.getElementById('main');
    if (signUpButton && signInButton && main) {
      signUpButton.addEventListener('click', () => {
        main.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
        main.classList.remove("right-panel-active");
      });
    }
  }

  onSubmit(formType: 'login' | 'register') {
    if (formType === 'login' && this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(
        (response: any) => {
          this.notificationService.notify('Login realizado com sucesso!', 'success');
        }, 
        (error) => {
          this.notificationService.notify('Erro ao realizar login: ' + error.message, 'error');
        }
      )
    } else if (formType === 'register' && this.registerForm.valid) {
      this.apiService.register(this.registerForm.value).subscribe(
        (response: any) => {
          this.notificationService.notify('Registro realizado com sucesso!', 'success'); 
        },
        (error) => {
          this.notificationService.notify('Erro ao realizar registro: ' + error.message, 'error');
        }
      )
    } else {
      this.notificationService.notify('Formulário inválido', 'error');
    }
  }

  recover(): void{
    this.dialog.open(RecoverComponent);
  }
}
