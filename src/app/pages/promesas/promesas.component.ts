import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrl: './promesas.component.css'
})
export class PromesasComponent implements OnInit{

 ngOnInit(): void {
 
  this.getUsuarios().then( usuarios => {
    console.log(usuarios);
    
  })
  // const promesa = new Promise( (resolve, reject ) => {

  //   if(true){
  //     resolve("Hola MUNDO");
  //   }else{
  //     reject('Algo salio mal')
  //   }
  // });
  // promesa.then((mensaje)=>{
  //   console.log(mensaje);
  // })
  // .catch(error => {
  //   console.log(`Error en la promesa, ${error}`);  
  // })
  // console.log("Fin del INIT");
 }

 public getUsuarios(){

  const promesa = new Promise((resolve, reject) => {

    fetch('https://reqres.in/api/users')
  
      .then( resp => resp.json()) // Recibe el datro en json ese metodo es necesario
      .then( users => resolve(users.data)) // Proporcina la parate de la data que buscamos
      .catch( error => reject(`Algo salio mal ${error}`) // Cacha y muestra el mensaje del tipo de error se puede generar de manera personalizada o dejarolo por default
      )

  });
    
  return promesa;

 }

}
