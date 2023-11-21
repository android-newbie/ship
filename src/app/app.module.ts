import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShipNameComponent } from './ship-name/ship-name.component';
import { ShipDetailsComponent } from './ship-details/ship-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipNameComponent,
    ShipDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
