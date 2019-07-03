import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GcMessageService {
  private subject = new Subject<any>();

  constructor() { }

  // add message to db
  sendMessage(messageData) {
    this.subject.next(messageData);
    console.log('messageData recieved in service', messageData);
    // send message data to firebase
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
