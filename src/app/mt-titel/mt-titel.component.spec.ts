import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtTitelComponent } from './mt-titel.component';

describe('MtTitelComponent', () => {
  let component: MtTitelComponent;
  let fixture: ComponentFixture<MtTitelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtTitelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtTitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
