import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModules } from '../shared/material-imports';
import { routes } from './pages.routes';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './login/recover/recover.component';

@NgModule({
    declarations: [
        PagesComponent,
        LoginComponent,
        RecoverComponent
    ],
    imports: [
        ...materialModules,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule.forChild(routes),
    ]
})
export class PagesModule { }
