import { Component } from '@angular/core';
import { Ship } from '../ship.interface';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.css']
})
export class ShipDetailsComponent {

  ships:Ship[] = this.shipService.getShips();

  constructor(private shipService: ShipService) {}

}
