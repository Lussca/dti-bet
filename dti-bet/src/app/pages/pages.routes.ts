import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'login', component: LoginComponent },
];
