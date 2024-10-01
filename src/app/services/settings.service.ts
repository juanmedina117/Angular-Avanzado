import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  private linkTheme = document.querySelector('#theme');


  constructor() {
    console.log("setting service");

    let temaStorge = localStorage.getItem('theme') || "./assets/css/colors/purple-dark.css";
    this.linkTheme?.setAttribute('href', temaStorge);

  }

  public changeTheme(theme: string) {

    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }

  public checkCurrentTheme() {

    //Es un arreglo de elementos tipo nodo por el DOM
    const links = document.querySelectorAll('.selector');


    links.forEach(el => {

      el.classList.remove('working');
      const btnTheme = el.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl == currentTheme) {
        el.classList.add('working');
      }

    });



  }

}
