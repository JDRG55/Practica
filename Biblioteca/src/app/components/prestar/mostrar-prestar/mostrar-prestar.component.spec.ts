import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPrestarComponent } from './mostrar-prestar.component';

describe('MostrarPrestarComponent', () => {
  let component: MostrarPrestarComponent;
  let fixture: ComponentFixture<MostrarPrestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarPrestarComponent]
    });
    fixture = TestBed.createComponent(MostrarPrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
