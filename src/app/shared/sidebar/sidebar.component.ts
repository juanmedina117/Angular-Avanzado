import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  public menuItems: any[] = [];

  constructor(
    private sideBarService: SidebarService
  ){
    this.menuItems = this.sideBarService.menu;
    
  }

}
