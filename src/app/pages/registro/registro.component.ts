import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})

export class RegistroComponent implements OnInit {


  auxUser: Usuario = {
    uid: "",
    age:"",
    email:"",
    gender:"M",
    lastname:"",
    name:"",
    password:"",
    rut:""

  }

  constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router) { }

  ngOnInit() {}


  async registrar(){
    console.log('datos->', this.auxUser);
    const respuesta = await this.auth.registrarUser(this.auxUser)
    
  }

}
