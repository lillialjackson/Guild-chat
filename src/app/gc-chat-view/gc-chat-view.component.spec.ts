import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcChatViewComponent } from './gc-chat-view.component';

describe('GcChatViewComponent', () => {
  let component: GcChatViewComponent;
  let fixture: ComponentFixture<GcChatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcChatViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcChatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
