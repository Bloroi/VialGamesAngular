import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JeuxvideoListComponent } from './jeuxvideo-list/jeuxvideo-list.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JeuxvideoManagerService} from './jeuxvideo-manager.service';
import { MagasinierListComponent } from './magasinier-list/magasinier-list.component';
import {AppRoutingModule} from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerJeuxvideoComponent } from './creer-jeuxvideo/creer-jeuxvideo.component';
import { ModifierJeuxvideoComponent } from './modifier-jeuxvideo/modifier-jeuxvideo.component';
import { ManagerJeuxvideoComponent } from './manager-jeuxvideo/manager-jeuxvideo.component';
import {DataJvServiceService} from './data-jv-service.service';


@NgModule({
  declarations: [
    AppComponent,
    JeuxvideoListComponent,
    MagasinierListComponent,
    AccueilComponent,
    CreerJeuxvideoComponent,
    ModifierJeuxvideoComponent,
    ManagerJeuxvideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JeuxvideoManagerService,DataJvServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
