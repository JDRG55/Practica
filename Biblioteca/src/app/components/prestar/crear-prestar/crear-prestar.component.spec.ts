import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPrestarComponent } from './crear-prestar.component';

describe('CrearPrestarComponent', () => {
  let component: CrearPrestarComponent;
  let fixture: ComponentFixture<CrearPrestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearPrestarComponent]
    });
    fixture = TestBed.createComponent(CrearPrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
