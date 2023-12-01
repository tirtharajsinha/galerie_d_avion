import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  createRange(number: any) {
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }

}
