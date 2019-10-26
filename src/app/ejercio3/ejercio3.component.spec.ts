import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercio3Component } from './ejercio3.component';

describe('Ejercio3Component', () => {
  let component: Ejercio3Component;
  let fixture: ComponentFixture<Ejercio3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejercio3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
