import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent implements  OnChanges {

  // Doughnut
  @Input() data!: ChartData<'doughnut'>;
  @Input() titleGraph: string = "Sin titulo;"

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  }
 
  public doughnutChartLabels: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   this.data = changes['data'].currentValue;
   this.doughnutChartData = {
    labels: this.data?.labels,
    datasets: this.data?.datasets
   }

   
    
  }



  // events
  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: ChartEvent;
  //   active: object[];
  // }): void {
  //   console.log(event, active);
  // }
}
