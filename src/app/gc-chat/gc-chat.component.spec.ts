import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcChatComponent } from './gc-chat.component';

describe('GcChatComponent', () => {
  let component: GcChatComponent;
  let fixture: ComponentFixture<GcChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
