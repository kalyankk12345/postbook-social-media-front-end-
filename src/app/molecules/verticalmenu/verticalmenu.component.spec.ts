import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalmenuComponent } from './verticalmenu.component';

describe('VerticalmenuComponent', () => {
  let component: VerticalmenuComponent;
  let fixture: ComponentFixture<VerticalmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
