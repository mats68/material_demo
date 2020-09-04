import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-exp',
  templateUrl: './mt-exp.component.html',
  styleUrls: ['./mt-exp.component.css']
})
export class MtExpComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
