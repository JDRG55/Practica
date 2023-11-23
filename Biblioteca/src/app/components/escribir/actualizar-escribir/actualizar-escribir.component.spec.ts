import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEscribirComponent } from './actualizar-escribir.component';

describe('ActualizarEscribirComponent', () => {
  let component: ActualizarEscribirComponent;
  let fixture: ComponentFixture<ActualizarEscribirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarEscribirComponent]
    });
    fixture = TestBed.createComponent(ActualizarEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
