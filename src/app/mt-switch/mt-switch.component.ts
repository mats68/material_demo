import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-switch',
  templateUrl: './mt-switch.component.html',
  styleUrls: ['./mt-switch.component.css']
})
export class MtSwitchComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
