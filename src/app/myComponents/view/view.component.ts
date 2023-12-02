import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as aircrafts from '../../../assets/data/aircraftsDatabase.json';
import * as aircraftsImage from '../../../assets/data/aircraftsImage.json';
import { Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})



export class ViewComponent {
  public id: string | undefined;
  public Image: string;
  public Image3d: string;
  public ImageLowQ: string;
  public data = {};
  public aircraftsList = [];
  public specsList: Array<string>;
  public specsUnit: Array<string>;

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit() {

    console.log(aircrafts);
    this.data = aircrafts[this.id];
    this.Image = aircraftsImage[this.id];
    this.Image3d = this.data["image3d"];
    this.ImageLowQ = this.data["image"];
    this.aircraftsList = Object.values(aircrafts);

    this.specsList = ["Classification", "Category", "WingSpan", "Length", "Height", "TakeOffDist", "LandingDist", "AbsCeiling", "OptCeiling", "MaxSpeed", "OptSpeed", "FuelCapacity", "MTOW",
      "MaxRange", "PersonsOnBoard", "MaxClimbRate", "Retired", "Prototype", "WingType"]
    this.specsUnit = ["", "", "m", "m", "m", "m", "m", "x100ft", "x100ft", "kts/M", "kts/M", "ltr", "t",
      "Nm", "", "ft/min", "", "", ""]

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);


    this.handelPosterSize();

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.handelPosterSize();
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }


  handelPosterSize() {
    if (window.innerHeight > window.innerWidth) {
      document.querySelector(".poster").classList.add("posterOnPhone");
      document.querySelector(".headdetails").classList.add("headdetailsOnPhone");
    }
    else {
      document.querySelector(".poster").classList.remove("posterOnPhone");
      document.querySelector(".headdetails").classList.remove("headdetailsOnPhone");
    }
  }

  createRange(number: any) {
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index);
  }

}
