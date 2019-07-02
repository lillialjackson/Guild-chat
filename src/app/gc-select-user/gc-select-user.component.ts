import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-gc-select-user',
  templateUrl: './gc-select-user.component.html',
  styleUrls: ['./gc-select-user.component.sass']
})
export class GcSelectUserComponent implements OnInit {
  userList: SelectItem[];
  selectedUser: string;

  constructor() {
    this.userList = [
      {label: 'Select User', value: null},
      {label: 'Kimmy', value: {id: 1, name: 'Kimmy'}},
      {label: 'Lillian', value: {id: 2, name: 'Lillian'}},
    ];
  }
  ngOnInit() {}
}
