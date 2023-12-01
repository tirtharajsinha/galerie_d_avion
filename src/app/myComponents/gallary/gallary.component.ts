import { Component, HostListener } from '@angular/core';
import * as aircrafts from '../../../assets/data/aircraftsDatabase.json';
import { CardDataType } from '../../card-data-type';
import { HttpServiceService } from '../../http-service.service';
import { formatCurrency } from '@angular/common';
import * as aircraftsImage from '../../../assets/data/aircraftsImage.json';



@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})

export class GallaryComponent {
  query = "";
  aircraftsList = [];
  formattedAircraftlist: CardDataType[] = [];
  filtered: CardDataType[] = [];




  constructor(private httpService: HttpServiceService) {
    this.aircraftsList = Object.values(aircrafts);
    this.aircraftsList.pop();
    this.aircraftsList.forEach(o => {

      this.formattedAircraftlist.push({
        "ICAO": o["ICAO"],
        "Model": o["Model"],
        "Manufacturer": o["Manufacturer"],
        "Image": o["image"],
        "Type": o["Type"],
        "Category": o["Category"] == "" ? "NA" : o["Category"],
        "MaxSpeed": o["MaxSpeed"] == "" ? "NA" : o["MaxSpeed"],
        "PersonsOnBoard": o["PersonsOnBoard"] == "" ? "NA" : o["PersonsOnBoard"]
      });

    })

    this.filtered = this.formattedAircraftlist;

  }


  clear() {
    this.query = "";
    this.search();
  }

  search() {
    this.filtered = [];
    const querystring = this.query.toLowerCase();
    this.formattedAircraftlist.forEach((o, i) => {
      if (
        o["ICAO"].toLowerCase().includes(querystring) ||
        o["Model"].toLowerCase().includes(querystring) ||
        o["Type"].toLowerCase().includes(querystring) ||
        o["Manufacturer"].toLowerCase().includes(querystring)) {
        this.filtered.push(o);
        // this.filtered.push({
        //   "ICAO": o["ICAO"],
        //   "Model": o["Model"],
        //   "Manufacturer": o["Manufacturer"],
        //   "Image": o["Image"],
        //   "Type": o["Type"],
        //   "Category": o["Category"],
        //   "MaxSpeed": o["MaxSpeed"],
        //   "PersonsOnBoard": o["PersonsOnBoard"]
        // });


      }

      // if (i == this.formattedAircraftlist.length - 1) {
      //   console.log(this.filtered);
      //   if (this.filtered.length == 0) {
      //     console.log("hello");
      //     this.handleUnknown(querystring);
      //   }
      // }
    });
  }

  ngOnInit() { }


  async handleUnknown(query: string) {
    await this.httpService.getAircrafts(query).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => { console.log(error); }
    );
  }
}
