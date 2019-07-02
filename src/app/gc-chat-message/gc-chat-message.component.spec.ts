import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcChatMessageComponent } from './gc-chat-message.component';

describe('GcChatMessageComponent', () => {
  let component: GcChatMessageComponent;
  let fixture: ComponentFixture<GcChatMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
