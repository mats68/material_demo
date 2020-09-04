import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtMainformComponent } from './mt-mainform.component';

describe('MtMainformComponent', () => {
  let component: MtMainformComponent;
  let fixture: ComponentFixture<MtMainformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtMainformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtMainformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
