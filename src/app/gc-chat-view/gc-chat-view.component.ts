import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { GcMessageService } from '../gc-message.service';


@Component({
  selector: 'app-gc-chat-view',
  templateUrl: './gc-chat-view.component.html',
  styleUrls: ['./gc-chat-view.component.sass']
})
export class GcChatViewComponent implements OnInit, OnChanges {
  viewMessages: AngularFireList<any>;
  constructor(private messageService: GcMessageService) { }

  ngOnInit() {
    this.viewMessages = this.messageService.getMessages();
  }

  ngOnChanges() {
    this.viewMessages = this.messageService.getMessages();
    console.log('viewmsg', this.viewMessages);
  }

}
