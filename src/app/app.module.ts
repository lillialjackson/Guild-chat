import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GcChatComponent } from './gc-chat/gc-chat.component';
import { GcChatMessageComponent } from './gc-chat-message/gc-chat-message.component';
import { GcChatViewComponent } from './gc-chat-view/gc-chat-view.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    GcChatComponent,
    GcChatMessageComponent,
    GcChatViewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    DropdownModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
