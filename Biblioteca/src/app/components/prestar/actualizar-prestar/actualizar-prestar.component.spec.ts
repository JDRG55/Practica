import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPrestarComponent } from './actualizar-prestar.component';

describe('ActualizarPrestarComponent', () => {
  let component: ActualizarPrestarComponent;
  let fixture: ComponentFixture<ActualizarPrestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPrestarComponent]
    });
    fixture = TestBed.createComponent(ActualizarPrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
