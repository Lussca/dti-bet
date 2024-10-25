import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { materialModules } from './shared/material-imports';
import { PagesModule } from './pages/pages.module';
import { NotificationComponent } from './shared/component/notification/notification.component';
import { LoadingInterceptor } from './shared/loader.interceptor';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        NotificationComponent,
        SpinnerComponent,
    ],
    imports: [
        CommonModule,
        PagesModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        ...materialModules
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        }
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }