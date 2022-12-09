import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.scss'],
})
export class AjustesComponent implements OnInit {
  data: Usuario =  {uid:"",
    age: "",
    email: "",
    gender: "M",
    lastname: "",
    name: "",
    password: "",
    rut: "",
  }

  ajustes: any[] = [];

  constructor(private database: FirestoreService, private interaction: InteractionService) { }

  ngOnInit() {
    console.log('Componente ajustes OK')
  }

  leerAjustesSecretos() {
    const path = 'Ajustes';
    this.database.getCollection(path).subscribe( (res) => {
        console.log(' leerAjustesSecretos -> ', res);
        this.ajustes = res;
    });
  }
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
