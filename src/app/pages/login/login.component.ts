import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credenciales = {
    email: "",
    password: ""
  }

  constructor(private auth: AuthService,
    private interaction: InteractionService,
    private router: Router,
    private menu: MenuController) {

     }

  ngOnInit() {}

  async login() {
    const res = await this.auth.login(this.credenciales.email, this.credenciales.password).catch( error => {
        console.log('error');
        this.interaction.presentToast('Usuario o contraseña invalido')
    })
    if (res) {
        console.log('res -> ', res);
        this.interaction.presentToast('Ingresado con exito');
        this.router.navigate(['/home'])
    }
  }
}
