import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ManagerJeuxvideoComponent} from './manager-jeuxvideo/manager-jeuxvideo.component';
import {ManagerMagasinierComponent} from './manager-magasinier/manager-magasinier.component';
import {PageAdminComponent} from './page-admin/page-admin.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'jvpage', component: ManagerJeuxvideoComponent},
  {path: 'magpage', component: ManagerMagasinierComponent},
  {path: 'adminpage', component: PageAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
