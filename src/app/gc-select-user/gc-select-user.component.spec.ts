import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcSelectUserComponent } from './gc-select-user.component';

describe('GcSelectUserComponent', () => {
  let component: GcSelectUserComponent;
  let fixture: ComponentFixture<GcSelectUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcSelectUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcSelectUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
