import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercio1Component } from './ejercio1.component';

describe('Ejercio1Component', () => {
  let component: Ejercio1Component;
  let fixture: ComponentFixture<Ejercio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejercio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
