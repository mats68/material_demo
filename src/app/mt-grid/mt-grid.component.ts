import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-mt-grid',
  templateUrl: './mt-grid.component.html',
  styleUrls: ['./mt-grid.component.css']
})
export class MtGridComponent implements OnInit {
  @Input() titel: string;
  @Input() subtitel: string;

  constructor() { }

  ngOnInit(): void {
  }

  opened(): void {
    alert('expand');
    console.log('Thaler')

  }

}
