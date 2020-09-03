import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-adresse',
  templateUrl: './mt-adresse.component.html',
  styleUrls: ['./mt-adresse.component.css']
})
export class MtAdresseComponent implements OnInit {
  @Input() font: string;
  constructor() { }

  ngOnInit(): void {
  }

}
