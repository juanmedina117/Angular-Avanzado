import { Component} from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {

  public labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ]; 

  public labels2: string[] = [
    'Ventas',
    'Stock',
    'Acomulados',
  ]; 

  public labels3: string[] = [
    'x',
    'y',
    'z',
  ]; 

  public labels4: string[] = [
    'a',
    'b',
    'c',
  ]; 


  public data1: ChartData<'doughnut'> = {
    labels:this.labels1,
    datasets: [
      { 
        data: [350, 450, 100],
        backgroundColor: [ '#9E120E','#FF5800','#FFB414'],
      }
    ],
  };

  public data2: ChartData<'doughnut'> = {
    labels:this.labels2,
    datasets: [
      { 
        data: [600, 350, 200],
        backgroundColor: ['#6857E6','#009FEE','#F02059',],
      }
    ],
  };

  public data3: ChartData<'doughnut'> = {
    labels:this.labels3,
    datasets: [
      { 
        data: [100, 200, 300],
        backgroundColor: [  'rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)'],
      }
    ],
  };

  public data4: ChartData<'doughnut'> = {
    labels:this.labels4,
    datasets: [
      { 
        data: [350, 450, 100],
        backgroundColor: [ '#FFF5CD','#FFCFB3','#E78F81'],
      }
    ],
  };

}
