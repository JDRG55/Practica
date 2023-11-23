import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEscribirComponent } from './mostrar-escribir.component';

describe('MostrarEscribirComponent', () => {
  let component: MostrarEscribirComponent;
  let fixture: ComponentFixture<MostrarEscribirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarEscribirComponent]
    });
    fixture = TestBed.createComponent(MostrarEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
