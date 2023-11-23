import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEjemplaresComponent } from './actualizar-ejemplares.component';

describe('ActualizarEjemplaresComponent', () => {
  let component: ActualizarEjemplaresComponent;
  let fixture: ComponentFixture<ActualizarEjemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarEjemplaresComponent]
    });
    fixture = TestBed.createComponent(ActualizarEjemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
