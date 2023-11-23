import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAutorComponent } from './actualizar-autor.component';

describe('ActualizarAutorComponent', () => {
  let component: ActualizarAutorComponent;
  let fixture: ComponentFixture<ActualizarAutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAutorComponent]
    });
    fixture = TestBed.createComponent(ActualizarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
