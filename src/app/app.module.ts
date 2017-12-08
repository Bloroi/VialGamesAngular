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
import {MembreManagerService} from './membre-manager.service';
import { PagePayementComponent } from './page-payement/page-payement.component';
import {ReservationEnCoursManagerService} from "./reservation-en-cours-manager.service";
import { PageReservEnCoursComponent } from './page-reserv-en-cours/page-reserv-en-cours.component';
import {TokenManagerService} from "./token-manager.service";
import {TokenInterceptor} from "./token-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MembreConnecteService} from "./membre-connecte.service";
import {PageConnectionComponent} from "./page-connection/page-connection.component";
import {FilterNomJvPipe} from "./filter-nom-jv.pipe";
import { ModifierMagReservationencoursComponent } from './modifier-mag-reservationencours/modifier-mag-reservationencours.component';
import {ReservationFinieManagerService} from './reservation-finie-manager.service';
import { PageMonCompteComponent } from './page-mon-compte/page-mon-compte.component';
import { HighlightDirective } from './highlight.directive';
import { PageMembresAdminComponent } from './page-membres-admin/page-membres-admin.component';
import { ModifMdpMembreComponent } from './modif-mdp-membre/modif-mdp-membre.component';


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
    PageMembreComponent,
    PagePayementComponent,
    PageReservEnCoursComponent,
    PageConnectionComponent,
    FilterNomJvPipe,
    ModifierMagReservationencoursComponent,
    PageMonCompteComponent,
    HighlightDirective,
    PageMembresAdminComponent,
    ModifMdpMembreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, JeuxvideoManagerService, MagasinierManagerService, AdministrateurManagerService, MembreManagerService,
    ReservationEnCoursManagerService, PagePayementComponent, TokenManagerService, MembreConnecteService, ReservationFinieManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
