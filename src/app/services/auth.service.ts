import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(email: string, password: string) {
    return  this.authfirebase.signInWithEmailAndPassword(email, password)
  }

  logut() {
    this.authfirebase.signOut();
  }

  registrarUser(datos: Usuario) {
    return  this.authfirebase.createUserWithEmailAndPassword(datos.email, datos.password);
  }

   stateUser() {
    return this.authfirebase.authState
   } 

   async getUid() {
    const user = await this.authfirebase.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
   }


}
