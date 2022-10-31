import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTComponent } from './agregar-t.component';

describe('AgregarTComponent', () => {
  let component: AgregarTComponent;
  let fixture: ComponentFixture<AgregarTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
