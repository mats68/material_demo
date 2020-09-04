import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTechformComponent } from './mt-techform.component';

describe('MtTechformComponent', () => {
  let component: MtTechformComponent;
  let fixture: ComponentFixture<MtTechformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtTechformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtTechformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
