import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gc-chat-message',
  templateUrl: './gc-chat-message.component.html',
  styleUrls: ['./gc-chat-message.component.sass']
})
export class GcChatMessageComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('message sent!', this.message);
    this.message = '';
  }
}
