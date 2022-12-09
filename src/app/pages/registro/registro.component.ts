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
  data: Usuario = {
    uid: "",
    age:"",
    email:"",
    gender:"M",
    lastname:"",
    name:"",
    password:"",
    rut:""

  }

  constructor(private auth: AuthService,private database: FirestoreService, private interaction: InteractionService) { }

  ngOnInit() {}
  crearNuevoUsuario(){
    const path = 'usuario';
    const id = this.database.getId();
    this.data.uid = id;
    this.database.creatDoc(this.data, path, id).then( ()=>{
      console.log("Todo guardado");
      this.interaction.presentToast('Guardado con exito');
    })
  }

}
