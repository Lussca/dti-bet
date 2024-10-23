import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { materialModules } from '../../shared/material-imports';

interface Quote {
  setup: string,
  punchline: string,
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ...materialModules, CommonModule, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  joke: string = '';  
  punchline: string = '';

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.fetchMotivationalQuote();
  }

  fetchMotivationalQuote() {
    this.http.get<Quote>('https://official-joke-api.appspot.com/random_joke').subscribe(
      (response) => {
        if (response) {
          this.translateToPortuguese(response.setup).subscribe((translatedSetup: string) => {
            this.joke = translatedSetup;
          });

          this.translateToPortuguese(response.punchline).subscribe((translatedPunchline: string) => {
            this.punchline = translatedPunchline;
          });
        }
      }
    );
  }

  translateToPortuguese(text: string) {
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt`;
    return this.http.get<any>(apiUrl).pipe(
      map((response) => response.responseData.translatedText)
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulário válido', this.loginForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
