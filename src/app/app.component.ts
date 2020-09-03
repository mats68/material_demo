import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  font: string = '12px';
  appearance: string = 'outline'; //standard, fill, outline, legacy
  disabled: boolean = false;
  hint: false;


}
