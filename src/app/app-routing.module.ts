import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';


const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'resultado', component:ResultadoComponent},
  {path: 'ajustes',component:AjustesComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }