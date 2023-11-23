import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEscribirComponent } from './crear-escribir.component';

describe('CrearEscribirComponent', () => {
  let component: CrearEscribirComponent;
  let fixture: ComponentFixture<CrearEscribirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEscribirComponent]
    });
    fixture = TestBed.createComponent(CrearEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
