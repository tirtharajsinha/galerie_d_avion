import { Component, Input } from '@angular/core';
import { CardDataType } from '../../../card-data-type';
@Component({
  selector: 'app-gallarycard',
  templateUrl: './gallarycard.component.html',
  styleUrl: './gallarycard.component.css'
})
export class GallarycardComponent {
  @Input() data: CardDataType;
}
