import { Injectable } from '@angular/core';
import { Ship } from './ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  ships:Ship[]=[
    {No:1,Name:"BlackPearl",Weight:1000},
    {No:2,Name:"ArabianNights",Weight:2000},
    {No:3,Name:"WhiteHouse",Weight:3000}
    
  ];

  getShips():Ship[]{
    return this.ships;
  }

  
}
