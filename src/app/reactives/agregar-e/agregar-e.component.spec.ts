import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEComponent } from './agregar-e.component';

describe('AgregarEComponent', () => {
  let component: AgregarEComponent;
  let fixture: ComponentFixture<AgregarEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
