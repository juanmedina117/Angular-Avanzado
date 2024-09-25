import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopageefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  //  path :'/dashboard' Pagesrouting
  //  path :'/auth' AuthRouting
  { path:'', redirectTo:'/dashboard', pathMatch:'full' }, //Ruta por deecto que lleva al dashborad
  { path: '**', component: NopageefoundComponent } // Pagina 404

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
