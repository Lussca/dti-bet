import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-notification></app-notification>
    <router-outlet></router-outlet>
    <app-spinner></app-spinner>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
