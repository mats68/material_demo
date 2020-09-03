import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-input',
  templateUrl: './mt-input.component.html',
  styleUrls: ['./mt-input.component.css']
})
export class MtInputComponent implements OnInit {

  @Input() label: string;
  @Input() width: string;
  @Input() prefix: string;
  @Input() suffix: string;

  constructor() { }

  ngOnInit(): void {
  }

}
