import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaComponent } from './updatea.component';

describe('UpdateaComponent', () => {
  let component: UpdateaComponent;
  let fixture: ComponentFixture<UpdateaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
