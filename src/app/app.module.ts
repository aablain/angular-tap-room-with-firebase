import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDva3u9tKWaqXlKdKuV8W6sD1y8wKWpt84",
  authDomain: "kombucha-bro.firebaseapp.com",
  databaseURL: "https://kombucha-bro.firebaseio.com",
  storageBucket: "kombucha-bro.appspot.com",
  messagingSenderId: "169209272640"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
