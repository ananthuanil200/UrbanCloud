import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent {
  @Input() weather!: Weather | null;
}
