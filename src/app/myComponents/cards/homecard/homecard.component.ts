import { Component, Input } from '@angular/core';
import * as flightData from '../../../../assets/homedata.json';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrl: './homecard.component.css'
})
export class HomecardComponent {
  @Input() aircraftid: number = 0;
  data: any = flightData;

  ngOnInit() {
    console.log('Data', this.data);
  }

}
