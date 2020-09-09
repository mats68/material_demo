import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { IGridDefinition } from "../../api/grid";

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
  griddef: IGridDefinition;

  constructor() { }

  ngOnInit(): void {
    this.griddef = { records: [{labels: [""], values: [""], summary: ""}]};
    this.griddef.records[0].summary = 'Kochherd';
    this.griddef.records[0].values[0] = 'Kochherd';
    this.griddef.records[1] = {labels: [""], values: [""], summary: ""};
    this.griddef.records[1].summary = 'Licht EG';
    this.griddef.records[1].values[0] = 'Licht EG';


    console.log(this.griddef);


  }

}
