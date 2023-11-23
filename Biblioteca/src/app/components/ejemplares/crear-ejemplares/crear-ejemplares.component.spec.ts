import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEjemplaresComponent } from './crear-ejemplares.component';

describe('CrearEjemplaresComponent', () => {
  let component: CrearEjemplaresComponent;
  let fixture: ComponentFixture<CrearEjemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEjemplaresComponent]
    });
    fixture = TestBed.createComponent(CrearEjemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
