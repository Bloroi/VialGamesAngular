import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JeuxvideoListComponent} from './jeuxvideo-list/jeuxvideo-list.component';
import {MagasinierListComponent} from './magasinier-list/magasinier-list.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ManagerJeuxvideoComponent} from './manager-jeuxvideo/manager-jeuxvideo.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'jvpage', component: ManagerJeuxvideoComponent},
  {path: 'magpage', component: MagasinierListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
