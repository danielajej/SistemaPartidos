import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejComponent } from './updatej.component';

describe('UpdatejComponent', () => {
  let component: UpdatejComponent;
  let fixture: ComponentFixture<UpdatejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatejComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
