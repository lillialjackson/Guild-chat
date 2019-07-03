import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GcUsersService } from '../gc-users.service';
import { GcMessageService } from '../gc-message.service';

@Component({
  selector: 'app-gc-chat',
  templateUrl: './gc-chat.component.html',
  styleUrls: ['./gc-chat.component.sass']
})
export class GcChatComponent implements OnInit, OnDestroy {
  // userSubscription: Subscription;
  messageSubscription: Subscription;
  // user: any;
  messages = [];

  constructor(
    // private usersService: GcUsersService,
              private messageService: GcMessageService) { 
      // this.userSubscription = this.usersService.getSelectedUser().subscribe(user => {
      //       // this.user = user;
      //       console.log('user recieved in chat', user);
      //     }
      //     );
    // this.messageSubscription = this.messageService.getMessage().subscribe((messageData) => 
    // {
    //   this.messages.push(messageData);
    //   console.log('message recieved in chat', this.messages);})
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.messages = [];
    // this.userSubscription.unsubscribe();
    // this.messageSubscription.unsubscribe();
  }

}
