import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Enviroment
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ResultadoComponent } from './pages/resultado/resultado.component';
//Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat';
//Componentes
import { AjustesComponent } from './backend/ajustes/ajustes.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
//Imports de APIS
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent,AjustesComponent,
    HomeComponent,ResultadoComponent,LoginComponent,RegistroComponent],

  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,FormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,ReactiveFormsModule,HttpClientModule
      ],

  providers: [{ provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy }],

  bootstrap: [AppComponent],
})
export class AppModule {}
