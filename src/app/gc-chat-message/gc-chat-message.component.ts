import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GcMessageService } from '../gc-message.service';
import {SelectItem} from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gc-chat-message',
  templateUrl: './gc-chat-message.component.html',
  styleUrls: ['./gc-chat-message.component.sass']
})
export class GcChatMessageComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
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
    console.log('message sent!', this.message);
    this.messageData['user'] = this.selectedUser;
    this.messageData['dateTime'] = new Date();
    this.messageData['message'] = this.message;
    console.log('messageData', this.messageData);
    if (this.messageData['user']) {
      this.messageService.sendMessage(this.messageData);
      this.message = '';
    } else {
      alert('Please select a user');
    }
  }
  ngOnDestroy() {
  }
}
