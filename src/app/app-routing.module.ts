import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ManagerJeuxvideoComponent} from './manager-jeuxvideo/manager-jeuxvideo.component';
import {ManagerMagasinierComponent} from './manager-magasinier/manager-magasinier.component';
import {PageAdminComponent} from './page-admin/page-admin.component';
import {PanierComponent} from './panier/panier.component';
import {PageMembreComponent} from './page-membre/page-membre.component';
import {PagePayementComponent} from "./page-payement/page-payement.component";
import {PageReservEnCoursComponent} from "./page-reserv-en-cours/page-reserv-en-cours.component";
import {PageConnectionComponent} from "./page-connection/page-connection.component";
import {PageMonCompteComponent} from "./page-mon-compte/page-mon-compte.component";

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'jvpage', component: ManagerJeuxvideoComponent},
  {path: 'magpage', component: ManagerMagasinierComponent},
  {path: 'adminpage', component: PageAdminComponent},
  {path: 'panierpage', component: PanierComponent},
  {path: 'membrepage', component: PageMembreComponent},
  {path: 'payementpage', component: PagePayementComponent},
  {path: 'reservationencourspage', component: PageReservEnCoursComponent},
  {path: 'connectionpage', component: PageConnectionComponent},
  {path: 'moncomptepage', component: PageMonCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
