import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

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
  multi: boolean = false;
  hint: false;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
