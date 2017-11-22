import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JeuxvideoListComponent } from './jeuxvideo-list/jeuxvideo-list.component';
import {FormsModule} from '@angular/forms';
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
import { PageAdminComponent } from './page-admin/page-admin.component';
import {AdministrateurManagerService} from './administrateur-manager.service';
import { FilterprixJvPipe } from './filterprix-jv.pipe';
import {HttpClientModule} from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { ManagerMembreComponent } from './manager-membre/manager-membre.component';
import { PageMembreComponent } from './page-membre/page-membre.component';


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
    ManagerMagasinierComponent,
    PageAdminComponent,
    FilterprixJvPipe,
    PanierComponent,
    ManagerMembreComponent,
    PageMembreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [JeuxvideoManagerService,MagasinierManagerService,AdministrateurManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
