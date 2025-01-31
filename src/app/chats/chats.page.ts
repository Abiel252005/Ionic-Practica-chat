import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: false
})
export class ChatsPage implements OnInit {

  chats: any[] = [
      {
        "username": "Nallely",
        "message": "Hola abiel",
        "date": "01:43",
        "avatarUrl": "https://randomuser.me/api/portraits/women/5.jpg"
      },
      {
        "username": "Zilli",
        "message": "Hola",
        "date": "01:25",
        "avatarUrl": "https://randomuser.me/api/portraits/women/10.jpg"
      },
      {
        "username": "Hipolito",
        "message": "Buenos días a todos",
        "date": "01:50",
        "avatarUrl": "https://randomuser.me/api/portraits/men/5.jpg"
      },
      {
        "username": "Daniel",
        "message": "¿Qué planes para hoy?",
        "date": "01:55",
        "avatarUrl": "https://randomuser.me/api/portraits/men/2.jpg"
      },
      {
        "username": "Lalo",
        "message": "Nos vemos en la tarde",
        "date": "02:00",
        "avatarUrl": "https://randomuser.me/api/portraits/men/15.jpg"
      },
      {
        "username": "Gio",
        "message": "¿Alguien quiere jugar fútbol?",
        "date": "02:05",
        "avatarUrl": "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        "username": "Emma",
        "message": "Hola a todos, ¿cómo están?",
        "date": "02:10",
        "avatarUrl": "https://randomuser.me/api/portraits/women/25.jpg"
      },
      {
        "username": "Tenchi",
        "message": "Estoy ocupado, nos vemos luego",
        "date": "02:15",
        "avatarUrl": "https://randomuser.me/api/portraits/men/30.jpg"
      },
      {
        "username": "Beto",
        "message": "¿Qué hay de nuevo?",
        "date": "02:20",
        "avatarUrl": "https://randomuser.me/api/portraits/men/35.jpg"
      },
      {
        "username": "Gael",
        "message": "Nos vemos en la noche",
        "date": "02:25",
        "avatarUrl": "https://randomuser.me/api/portraits/men/40.jpg"
      }
  ];


  constructor() {}

  ngOnInit() {}
  }


