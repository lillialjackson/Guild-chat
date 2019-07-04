import { Component, OnInit, OnChanges } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { GcMessageService } from '../gc-message.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gc-chat-view',
  templateUrl: './gc-chat-view.component.html',
  styleUrls: ['./gc-chat-view.component.sass']
})
export class GcChatViewComponent implements OnInit {
  viewMessages: Observable<any>;
  constructor(private messageService: GcMessageService) { 
    this.viewMessages = this.messageService.getMessages().valueChanges();

  }

  ngOnInit() {
  }

}
