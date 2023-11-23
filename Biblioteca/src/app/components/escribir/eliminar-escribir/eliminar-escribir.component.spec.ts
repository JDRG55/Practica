import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEscribirComponent } from './eliminar-escribir.component';

describe('EliminarEscribirComponent', () => {
  let component: EliminarEscribirComponent;
  let fixture: ComponentFixture<EliminarEscribirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarEscribirComponent]
    });
    fixture = TestBed.createComponent(EliminarEscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
