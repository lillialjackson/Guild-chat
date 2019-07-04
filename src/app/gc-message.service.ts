import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GcMessageService {
  chatMessages: AngularFireList<any[]>;

  constructor( private db: AngularFireDatabase) { }

  // add message to db
  sendMessage(messageData) {
    this.chatMessages = this.getMessages();
    this.chatMessages.push(messageData);
  }

  getMessages(): AngularFireList<any> {
    return this.db.list('messages');
  }

}
