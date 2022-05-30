import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  safeSrc: SafeResourceUrl;
  tvs: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.cryptometer.io/volume-flow");
    this.tvs =  this.sanitizer.bypassSecurityTrustResourceUrl("https://ru.tradingview.com/chart/rhp4KhhD/?symbol=BYBIT%3ABTCUSDT");

  }

}
