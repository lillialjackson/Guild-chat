import { Component, OnInit } from '@angular/core';
import { GcMessageService } from '../gc-message.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-gc-chat-message',
  templateUrl: './gc-chat-message.component.html',
  styleUrls: ['./gc-chat-message.component.sass']
})
export class GcChatMessageComponent implements OnInit {
  messageData = {};
  message: string;
  userList: SelectItem[];
  selectedUser: string;

  constructor(private messageService: GcMessageService) {
                this.userList = [
                {label: 'Select User', value: null},
                {label: 'Kimmy', value: 'Kimmy'},
                {label: 'Lillian', value: 'Lillian'},
              ];
            }

  ngOnInit() {
  }

  onSubmit() {
    this.messageData['user'] = this.selectedUser;
    this.messageData['dateTime'] = new Date();
    this.messageData['message'] = this.message;
    if (this.messageData['user']) {
      this.messageService.sendMessage(this.messageData);
      console.log(this.messageData);
      this.message = '';
    } else {
      alert('Please select a user');
    }
  }
}
