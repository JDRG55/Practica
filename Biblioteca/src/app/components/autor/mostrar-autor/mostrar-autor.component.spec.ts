import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAutorComponent } from './mostrar-autor.component';

describe('MostrarAutorComponent', () => {
  let component: MostrarAutorComponent;
  let fixture: ComponentFixture<MostrarAutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarAutorComponent]
    });
    fixture = TestBed.createComponent(MostrarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
