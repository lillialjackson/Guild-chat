import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GcSelectUserComponent } from './gc-select-user/gc-select-user.component';
import { GcChatComponent } from './gc-chat/gc-chat.component';
import { GcChatMessageComponent } from './gc-chat-message/gc-chat-message.component';
import { GcChatViewComponent } from './gc-chat-view/gc-chat-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GcSelectUserComponent,
    GcChatComponent,
    GcChatMessageComponent,
    GcChatViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
