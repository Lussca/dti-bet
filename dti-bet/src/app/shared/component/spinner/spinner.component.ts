import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../../service/loader.service';

@Component({
    selector: 'app-spinner',
    styleUrls: ['./spinner.component.scss'],
    templateUrl: './spinner.component.html',
    encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  constructor(public loader: LoaderService) {}
}