import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class GcMessageService {
  private subject = new Subject<any>();
  chatMessages: AngularFireList<any[]>;
  message: any;
  fbMessageData: AngularFireList<any>;

  constructor( private db: AngularFireDatabase) { }

  // add message to db
  sendMessage(messageData) {
    this.subject.next(messageData);
    console.log('messageData recieved in service', messageData);
    // send message data to firebase
    this.chatMessages = this.getMessages();
    this.chatMessages.push(messageData);
  }

  getMessages():AngularFireList<any> {
    return this.db.list('messages');
  }

  clearMessage() {
    this.subject.next();
  }
  // get messages from db
  getMessage(): Observable<any> {
    return this.subject.asObservable();
    // get messages from firebase
  }
}
