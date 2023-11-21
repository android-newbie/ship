import { Component } from '@angular/core';
import { ShipService } from '../ship.service';
import { Ship } from '../ship.interface';

@Component({
  selector: 'app-ship-name',
  templateUrl: './ship-name.component.html',
  styleUrls: ['./ship-name.component.css']
})
export class ShipNameComponent {
  ships: Ship[] = this.shipService.getShips();

  constructor(private shipService: ShipService) {}
}
