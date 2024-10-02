import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Title } from 'chart.js';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: ``
})
export class BreadcrumsComponent implements OnDestroy{

  public titulo: string = "";

  // Se guarda la subscripcion en una variable para poderla elminar o detenerla en el destroy
  public tituloSubs$ = this.getArgumentosRuta().subscribe({
    // Aqui se desestructura el objeto data, sacando su propiedad titulo
    next: ({titulo}) => {
      this.titulo = titulo;
      document.title =`AdminPro - ${ titulo }`; // Cambia el nombre de la pestaña del navegador
      
    }      
})

  constructor(private router: Router) {
    this.getArgumentosRuta();
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {

    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }

}
