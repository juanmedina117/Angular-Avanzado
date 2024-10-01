import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      subMenu:[
        { titulo:'Main',  url:'/' },
        { titulo:'ProgressBar',  url:'progress' },
        { titulo:'Grafica',  url:'grafica1' },
      ]
    },
  ];

  constructor() { }
}
