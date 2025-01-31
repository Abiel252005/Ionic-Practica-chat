import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: 'stories.page.html',
  styleUrls: ['stories.page.scss'],
  standalone: false
})
export class StoriesPage {
  stories = [
    {
      name: 'Nallely',
      profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
      time: 'Hace 5 minutos',
      image: 'https://via.placeholder.com/800x600/0000FF/808080?text=Story+1'
    },
    {
      name: 'Daniel',
      profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
      time: 'Justo ahora',
      image: 'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Story+2'
    },
    {
      name: 'Hipolito',
      profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg',
      time: 'Hace 15 minutos',
      image: 'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Story+2'
    },
    {
      "name": "Zilli",
      "profilePicture": "https://randomuser.me/api/portraits/women/10.jpg",
      "time": "Hace 20 minutos",
      "image": "https://via.placeholder.com/800x600/00FF00/FFFFFF?text=Story+Zilli"
    },
    {
      "name": "Lalo",
      "profilePicture": "https://randomuser.me/api/portraits/men/15.jpg",
      "time": "Hace 25 minutos",
      "image": "https://via.placeholder.com/800x600/FFA500/FFFFFF?text=Story+Lalo"
    },
    {
      "name": "Gio",
      "profilePicture": "https://randomuser.me/api/portraits/men/20.jpg",
      "time": "Hace 30 minutos",
      "image": "https://via.placeholder.com/800x600/800080/FFFFFF?text=Story+Gio"
    },
    {
      "name": "Emma",
      "profilePicture": "https://randomuser.me/api/portraits/women/25.jpg",
      "time": "Hace 35 minutos",
      "image": "https://via.placeholder.com/800x600/FFFF00/000000?text=Story+Emma"
    },
    {
      "name": "Tenchi",
      "profilePicture": "https://randomuser.me/api/portraits/men/30.jpg",
      "time": "Hace 40 minutos",
      "image": "https://via.placeholder.com/800x600/FFC0CB/000000?text=Story+Tenchi"
    },
    {
      "name": "Beto",
      "profilePicture": "https://randomuser.me/api/portraits/men/35.jpg",
      "time": "Hace 45 minutos",
      "image": "https://via.placeholder.com/800x600/4682B4/FFFFFF?text=Story+Beto"
    },
    {
      "name": "Gael",
      "profilePicture": "https://randomuser.me/api/portraits/men/40.jpg",
      "time": "Hace 50 minutos",
      "image": "https://via.placeholder.com/800x600/FFD700/000000?text=Story+Gael"
    }
    
  ];

  selectedStory: any;

  viewStory(story: any) {
    this.selectedStory = story;
  }
//cerrar historia al hacer click en pantalla
  closeStory() {
    this.selectedStory = null;
  }
}