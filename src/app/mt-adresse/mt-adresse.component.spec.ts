import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtAdresseComponent } from './mt-adresse.component';

describe('MtAdresseComponent', () => {
  let component: MtAdresseComponent;
  let fixture: ComponentFixture<MtAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
