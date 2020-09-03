import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-yesnopanel',
  templateUrl: './mt-yesnopanel.component.html',
  styleUrls: ['./mt-yesnopanel.component.css']
})
export class MtYesnopanelComponent implements OnInit {
  @Input() label: string;
  @Input() font: string;
  @Input() appearance: string = 'outline';

  show: boolean;
  switchtext(): string {
    if (this.show) { return 'Ja'; } else { return 'Nein'; }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
