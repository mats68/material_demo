import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-checkbox',
  templateUrl: './mt-checkbox.component.html',
  styleUrls: ['./mt-checkbox.component.css']
})
export class MtCheckboxComponent implements OnInit {
  @Input() label: string;


  constructor() { }

  ngOnInit(): void {
  }

}
