import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPrestarComponent } from './eliminar-prestar.component';

describe('EliminarPrestarComponent', () => {
  let component: EliminarPrestarComponent;
  let fixture: ComponentFixture<EliminarPrestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarPrestarComponent]
    });
    fixture = TestBed.createComponent(EliminarPrestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
