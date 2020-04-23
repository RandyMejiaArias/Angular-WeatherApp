import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';
import { showUp, showUpStaggered } from 'src/animations/showUp.animation';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass'],
  animations: [showUpStaggered]
})
export class ForecastComponent implements OnInit {

  constructor(public forecastService : ForecastService) { }

  ngOnInit(): void {
  }

}
