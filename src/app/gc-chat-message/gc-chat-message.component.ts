import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GcMessageService } from '../gc-message.service';
import { GcUsersService } from '../gc-users.service';
import { Subscription } from 'rxjs';
import { Message } from '../message';

@Component({
  selector: 'app-gc-chat-message',
  templateUrl: './gc-chat-message.component.html',
  styleUrls: ['./gc-chat-message.component.sass']
})
export class GcChatMessageComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  messageData = {};
  message: string;
  user: any;
  constructor(private usersService: GcUsersService,
              private messageService: GcMessageService) { 
                
              }

  ngOnInit() {
    this.userSubscription = this.usersService.getSelectedUser().subscribe(user => {
      this.user = user;
      console.log('user recieved in chat', this.user);
    }
    );
    console.log(this.user);
  }

  onSubmit() {
    console.log('message sent!', this.message);
    this.messageData['user'] = this.user;
    this.messageData['dateTime'] = new Date();
    this.messageData['message'] = this.message;
    console.log('messageData', this.messageData);
    this.messageService.sendMessage(this.message);
    this.message = '';
  }
  ngOnDestroy() {
    // this.userSubscription.unsubscribe();
  }
}
