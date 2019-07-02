import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-gc-select-user',
  templateUrl: './gc-select-user.component.html',
  styleUrls: ['./gc-select-user.component.sass']
})
export class GcSelectUserComponent implements OnInit {
  userList: SelectItem[];
  selectedUser: string;
  // user: string;
  constructor(private router: Router) {
    this.userList = [
      {label: 'Select User', value: null},
      {label: 'Kimmy', value: {id: 1, name: 'Kimmy'}},
      {label: 'Lillian', value: {id: 2, name: 'Lillian'}},
    ];
  }
  ngOnInit() {}
  enterChat() {
    console.log('chat entered!', this.selectedUser);
    if (this.selectedUser === null || this.selectedUser === undefined) {
      alert('Please select a user');
    } else {
      this.router.navigateByUrl('/chat');
    }
  }
}
