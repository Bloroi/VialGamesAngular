import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JeuxvideoListComponent } from './jeuxvideo-list/jeuxvideo-list.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JeuxvideoManagerService} from './jeuxvideo-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    JeuxvideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JeuxvideoManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
