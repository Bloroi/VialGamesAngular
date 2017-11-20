import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JeuxvideoListComponent } from './jeuxvideo-list/jeuxvideo-list.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JeuxvideoManagerService} from './jeuxvideo-manager.service';
import {AppRoutingModule} from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { CreerJeuxvideoComponent } from './creer-jeuxvideo/creer-jeuxvideo.component';
import { ModifierJeuxvideoComponent } from './modifier-jeuxvideo/modifier-jeuxvideo.component';
import { ManagerJeuxvideoComponent } from './manager-jeuxvideo/manager-jeuxvideo.component';
import {CreerMagasinierComponent} from './creer-magasinier/creer-magasinier.component';
import {ModifierMagasinierComponent} from './modifier-magasinier/modifier-magasinier.component';
import {ManagerMagasinierComponent} from './manager-magasinier/manager-magasinier.component';
import {MagasinierManagerService} from './magasinier-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    JeuxvideoListComponent,
    AccueilComponent,
    CreerJeuxvideoComponent,
    ModifierJeuxvideoComponent,
    ManagerJeuxvideoComponent,
    CreerMagasinierComponent,
    ModifierMagasinierComponent,
    ManagerMagasinierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JeuxvideoManagerService,MagasinierManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
