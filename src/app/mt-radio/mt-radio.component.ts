import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-radio',
  templateUrl: './mt-radio.component.html',
  styleUrls: ['./mt-radio.component.css']
})

// export class RadioItems {
//   value: string;
//   text: string;
// }

export class MtRadioComponent implements OnInit {
  @Input() label: string;
  @Input() items: string[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
