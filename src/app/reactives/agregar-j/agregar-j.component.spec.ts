import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJComponent } from './agregar-j.component';

describe('AgregarJComponent', () => {
  let component: AgregarJComponent;
  let fixture: ComponentFixture<AgregarJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
