import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEjemplaresComponent } from './mostrar-ejemplares.component';

describe('MostrarEjemplaresComponent', () => {
  let component: MostrarEjemplaresComponent;
  let fixture: ComponentFixture<MostrarEjemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarEjemplaresComponent]
    });
    fixture = TestBed.createComponent(MostrarEjemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
