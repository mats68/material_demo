import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-card',
  templateUrl: './mt-card.component.html',
  styleUrls: ['./mt-card.component.css']
})
export class MtCardComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
