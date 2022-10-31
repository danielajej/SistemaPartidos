import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetComponent } from './updatet.component';

describe('UpdatetComponent', () => {
  let component: UpdatetComponent;
  let fixture: ComponentFixture<UpdatetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
