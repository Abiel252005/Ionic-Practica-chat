import { Component, OnInit } from '@angular/core';
import { PopoverContentComponent } from '../popover-content/popover-content.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  constructor(private popoverController: PopoverController) {}
  
    ngOnInit() {}
  
    async presentPopover(event: Event) {
      const popover = await this.popoverController.create({
        component: PopoverContentComponent,  // Componente que se mostrará en el popover
        event: event,  // El evento de clic que activa el popover
        translucent: true
      });
      await popover.present();
    }

}
