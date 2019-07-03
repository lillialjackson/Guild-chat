import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GcChatComponent } from './gc-chat/gc-chat.component';

const routes: Routes = [
  {path: 'chat', component: GcChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
