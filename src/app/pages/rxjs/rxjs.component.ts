import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit, OnDestroy{

  public intervalSubs!: Subscription;

  ngOnInit(): void {
 
    
    // this.retornaObservable()
    // .pipe(
    //   retry(1) // Permite repetir la petición al obsevable el numero de veces que se manden de parametro, si no se manda un valor entonces se repite de manera infinita
    // )
    // .subscribe({
    //   next: valor => console.log('Subs', valor),
    //   error: error => console.warn('Error', error),
    //   complete: () => console.info('Obs terminado')
    // });

    this.intervalSubs = this.retornaIntervalo().subscribe({
      // Esto es lo mismo que esto ->  next: valor => console.log(valor)
      next: console.log

    })
    
  }

  // Detiene o destruye la subscripción que se mantiene viva 
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();  
  }
  
  public retornaIntervalo(): Observable<number>{

    return interval(200)
    .pipe( 
      //take(10), // Emite sólo los primeros valores emitidos por el Observable de origen, emitira las veces que mandes por argumento en este caso emitira el numero que ingreses en el parentesis
      map( valor => valor + 1 ), // Permite modificar la data que arroja el observable
      filter( numero => (numero % 2 == 0) ? true : false ), // Filtra y permite la salida del observable si se cumple la condicion, en este caso que sea un numero par
    );

    // return interval$;

  }

  public retornaObservable(): Observable<number>{
    // El observer es quien emite los valores cuando termina y llegan valores
    // Subscribre muestra el estado del observable
    // No se ejecuta hasta quye se suscriban a el 

    // Se crea el nuevo observable  
    // Tambien se puede realizar retornando directamente el new Observable
    // const obs$ = new Observable<number>( observer =>{
      return new Observable<number>( observer =>{

      
      let i = -1;
      const intervalo = setInterval( () =>{

        i++;
        observer.next(i); //Envia la data para que el suscriptor pueda obtener la data eso hace la función next()

        if(i === 4){
          clearInterval(intervalo); //Finaliza el intervalo
          observer.complete(); // Completa o finaliza la subscripción 
        }

        if(i === 2){
          // i = 0;
          observer.error('i llego al valor de 2'); // Envia el error personalizado del observable
        }
        
      }, 1000)

    });

    // return obs$;
  }

}
