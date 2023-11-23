import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEjemplaresComponent } from './eliminar-ejemplares.component';

describe('EliminarEjemplaresComponent', () => {
  let component: EliminarEjemplaresComponent;
  let fixture: ComponentFixture<EliminarEjemplaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarEjemplaresComponent]
    });
    fixture = TestBed.createComponent(EliminarEjemplaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
