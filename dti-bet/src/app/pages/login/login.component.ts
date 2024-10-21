import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// interface Quote {
//   text: string;
//   author: string;
// }

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatCardModule, HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // motivationalMessage: Quote | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // this.fetchMotivationalQuote();
  }

  // fetchMotivationalQuote() {
  //   this.http.get<Quote[]>('https://official-joke-api.appspot.com/random_joke')
  //     .subscribe(
  //       (response) => {
  //         console.log(response);
  //         // this.motivationalMessage = response[0];
  //       },
  //       (error) => {
  //         console.error('Erro ao buscar a citação:', error);
  //       }
  //     );
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulário válido', this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
