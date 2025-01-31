import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
  standalone: false,
})
export class CallsPage {
  callHistory = [
    {
      name: 'Nallely Hazel',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      phone: '+521234567890',
      status: 'Llamada entrante - Ayer',
      type: 'incoming',
    },
    {
      name: 'Daniel',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      phone: '+529876543210',
      status: 'Llamada perdida - Hoy',
      type: 'missed',
    },
    {
      name: 'Jafet',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      phone: '+529876543210',
      status: 'Llamada perdida - Hace 20 minutos',
      type: 'missed',
    },
    {
      "name": "Zilli",
      "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
      "phone": "+521245678901",
      "status": "Llamada entrante - Hace 1 hora",
      "type": "incoming"
    },
    {
      "name": "Hipolito",
      "avatar": "https://randomuser.me/api/portraits/men/5.jpg",
      "phone": "+521987654321",
      "status": "Llamada realizada - Hoy",
      "type": "outgoing"
    },
    {
      "name": "Lalo",
      "avatar": "https://randomuser.me/api/portraits/men/15.jpg",
      "phone": "+529123456789",
      "status": "Llamada perdida - Hace 3 horas",
      "type": "missed"
    },
    {
      "name": "Gio",
      "avatar": "https://randomuser.me/api/portraits/men/20.jpg",
      "phone": "+521345678901",
      "status": "Llamada realizada - Ayer",
      "type": "outgoing"
    },
    {
      "name": "Emma",
      "avatar": "https://randomuser.me/api/portraits/women/25.jpg",
      "phone": "+521567890123",
      "status": "Llamada entrante - Hace 2 días",
      "type": "incoming"
    },
    {
      "name": "Tenchi",
      "avatar": "https://randomuser.me/api/portraits/men/30.jpg",
      "phone": "+529654321987",
      "status": "Llamada perdida - Hoy",
      "type": "missed"
    },
    {
      "name": "Beto",
      "avatar": "https://randomuser.me/api/portraits/men/35.jpg",
      "phone": "+521765432109",
      "status": "Llamada realizada - Hace 4 horas",
      "type": "outgoing"
    },
    {
      "name": "Gael",
      "avatar": "https://randomuser.me/api/portraits/men/40.jpg",
      "phone": "+521876543210",
      "status": "Llamada entrante - Hace 5 horas",
      "type": "incoming"
    }

  ];

  constructor() {}
}
