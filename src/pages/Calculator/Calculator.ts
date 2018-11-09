import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-Calculator',
  templateUrl: 'Calculator.html'
})
export class CalculatorPage {

  constructor(public navCtrl: NavController) {

  }

  result=0;
  band=0;
  arreglo=[];

  num(num){
    this.arreglo.push(num);
    if (this.band=0) {
      this.band=0;
      this.result=num;
    }else{
      this.result+=num;
    console.log(this.arreglo);
    } 
  }

  arit(sim){
    this.arreglo.push(sim);
    this.band=0;
    this.result+=sim;
  }

  clear(){
    this.arreglo=[];
    this.result=0; 
  }

  igual(){
    this.result=eval(this.arreglo.join(''));
    this.band=0;
  }
}
