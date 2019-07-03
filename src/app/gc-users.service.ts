import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GcUsersService {
  private subject = new Subject<any>();
  constructor() { }

  sendSelectedUser(user) {
    this.subject.next(user);
    console.log('user recieved in service', user);
  }
  getSelectedUser(): Observable<any> {
    return this.subject.asObservable();
   }

   clearUser() {
     this.subject.next();
   }
}
