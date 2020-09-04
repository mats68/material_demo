import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mt-mainform',
  templateUrl: './mt-mainform.component.html',
  styleUrls: ['./mt-mainform.component.css']
})
export class MtMainformComponent implements OnInit {
  title = 'material-demo';
  font: string = '12px';
  appearance: string = 'outline'; //standard, fill, outline, legacy
  disabled: boolean = false;
  hint: false;

  constructor() { }

  ngOnInit(): void {
  }

}
