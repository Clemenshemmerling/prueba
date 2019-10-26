import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercio2Component } from './ejercio2.component';

describe('Ejercio2Component', () => {
  let component: Ejercio2Component;
  let fixture: ComponentFixture<Ejercio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejercio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
