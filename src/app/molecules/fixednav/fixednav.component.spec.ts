import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixednavComponent } from './fixednav.component';

describe('FixednavComponent', () => {
  let component: FixednavComponent;
  let fixture: ComponentFixture<FixednavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixednavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixednavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
