import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private database: FirestoreService) {
    this.getUsuario();
   }

  ngOnInit() {}


  getUsuario(){
    this.database.getCollection<Usuario>('usuario').subscribe( respuesta =>{
      console.log('Esto tenemos en la BDD de usuario', respuesta);
      this.usuarios = respuesta;
    })
  }

}
