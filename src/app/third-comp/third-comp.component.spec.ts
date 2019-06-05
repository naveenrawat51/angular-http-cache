import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCompComponent } from './third-comp.component';

describe('ThirdCompComponent', () => {
  let component: ThirdCompComponent;
  let fixture: ComponentFixture<ThirdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
