import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// Declaramos la funcion que permite cargar los js del sistema
// Esta funcion se encuentra en assets/js/custom.js
declare function customInitFunctions():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit{


  constructor(
    private settingsService:SettingsService
  ){

  }

  ngOnInit(): void {
    customInitFunctions();
  }



}
