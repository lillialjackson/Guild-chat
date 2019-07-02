import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gc-chat-view',
  templateUrl: './gc-chat-view.component.html',
  styleUrls: ['./gc-chat-view.component.sass']
})
export class GcChatViewComponent implements OnInit {
  messages = [
    {user: 'Kimmy',
      message: 'Hi'},
      {user: 'Lillian',
      message: 'Sup'},
      {user: 'Kimmy',
      message: 'Where are you?'},
      {user: 'Kimmy',
      message: 'Hi'},
      {user: 'Lillian',
      message: 'Sup'},
      {user: 'Kimmy',
      message: 'Where are you?'},
      {user: 'Kimmy',
      message: 'Hi'},
      {user: 'Lillian',
      message: 'Sup'},
      {user: 'Kimmy',
      message: 'Where are you?'},
      {user: 'Kimmy',
      message: 'Hi'},
      {user: 'Lillian',
      message: 'Sup'},
      {user: 'Kimmy',
      message: 'Where are you?'},
      {user: 'Kimmy',
      message: 'Hi'},
      {user: 'Lillian',
      message: 'Sup'},
      {user: 'Kimmy',
      message: 'Where are you?'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
