import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GcSelectUserComponent } from './gc-select-user/gc-select-user.component';
import { GcChatComponent } from './gc-chat/gc-chat.component';

const routes: Routes = [
  {path: 'select-user', component: GcSelectUserComponent},
  {path: 'chat', component: GcChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
