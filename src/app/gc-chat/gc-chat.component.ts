import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { GcMessageService } from '../gc-message.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
// import { firestore } from 'firebase';

@Component({
  selector: 'app-gc-chat',
  templateUrl: './gc-chat.component.html',
  styleUrls: ['./gc-chat.component.sass']
})
export class GcChatComponent implements OnInit, OnDestroy {
  messages = [];
  fbMessages: Observable<any>;
  addMessages: any;
  constructor(private messageService: GcMessageService,
              public firebaseDb: AngularFireDatabase ) { 
  // this.fbMessages = firebaseDb.list('messages').valueChanges();
  // this.addMessages = firebaseDb.list('messages');
  // this.addMessages.push(this.messages);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.messages = [];
    // this.messageSubscription.unsubscribe();
  }

}
