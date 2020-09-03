import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-titel',
  templateUrl: './mt-titel.component.html',
  styleUrls: ['./mt-titel.component.css']
})
export class MtTitelComponent implements OnInit {
  @Input() label: string;
   
  constructor() { }

  ngOnInit(): void {
  }

}
