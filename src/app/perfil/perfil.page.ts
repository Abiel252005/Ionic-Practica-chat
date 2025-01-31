import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true, 
  imports: [CommonModule, FormsModule, IonicModule],
})
export class PerfilPage {
  profile = {
    name: 'Abiel',
    status: '¡Hola! Estoy usando Ionic.',
    phone: '+52 123 456 7890',
    email: 'abiel@example.com',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
  };

  constructor(private alertController: AlertController) {}

  async editProfile() {
    const alert = await this.alertController.create({
      header: 'Editar perfil',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: this.profile.name,
          placeholder: 'Nombre',
        },
        {
          name: 'status',
          type: 'text',
          value: this.profile.status,
          placeholder: 'Estado',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: (data) => {
            this.profile.name = data.name;
            this.profile.status = data.status;
          },
        },
      ],
    });

    await alert.present();
  }

  async changePhoto() {
    const alert = await this.alertController.create({
      header: 'Cambiar foto de perfil',
      message: 'Selecciona una nueva foto',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Seleccionar',
          handler: () => {
            // Lógica para seleccionar una foto de la galería o cámara
          },
        },
      ],
    });

    await alert.present();
  }

  viewSharedMedia() {
    console.log('Ver fotos y videos compartidos');
  }
}