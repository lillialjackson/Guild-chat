import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guild-chat-client';

  userList: SelectItem[];
  selectedUser: string;

  constructor() {
    this.userList = [
      {label: 'Select User', value: null},
      {label: 'Kimmy', value: {id: 1, name: 'Kimmy'}},
      {label: 'Lillian', value: {id: 2, name: 'Lillian'}},
    ];
  }
}
