import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Weather App';

  constructor(public geolocationService : GeolocationService){

  }

  ngOnInit(){
  }
}
