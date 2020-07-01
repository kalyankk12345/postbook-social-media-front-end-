import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostheadComponent } from './posthead.component';

describe('PostheadComponent', () => {
  let component: PostheadComponent;
  let fixture: ComponentFixture<PostheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
