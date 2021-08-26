import { Component } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicioClase01';
  usuario:User;
  edad1 = "";
  edad2 = "";
  suma:string = "";
  promedio:string = "";

  constructor(){
    this.usuario = new User();
  }

  saludar(){
    console.log("Hola 4B!");
  }

  limpiar(){
    this.edad1 = "";
    this.edad2 = "";
    this.promedio = "";
    this.suma = "";
  }

  calcular(){
    this.suma = this.calcularsuma(this.edad1, this.edad2).toString();
    this.promedio = this.calcularpromedio(this.edad1, this.edad2).toString();
  }

  calcularsuma(number1:string, number2:string){
    var result = parseInt(number1) + parseInt(number2);
    console.log("suma: " + result);
    return result;
  }

  calcularpromedio(number1:string, number2:string){
    var result = this.calcularsuma(number1, number2) / 2;
    console.log("promedio: " + result);
    return result;
  }
}
