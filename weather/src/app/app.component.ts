// ...existing imports and decorator...
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { WeatherService } from './services/weather.service';
import { CityFactService } from './services/city-fact.service';
import { UnsplashService } from './services/unsplash.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SearchComponent, WeatherDisplayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CityFactService, UnsplashService]
})
export class AppComponent {
  loading = false;
  error: string | null = null;
  weatherData: any = null;
  cityFact: string | { extract: string } | null = null;
  cityImage: string | null = null;

  constructor(
    private weatherService: WeatherService,
    private factService: CityFactService,
    private unsplashService: UnsplashService
  ) {}

  cityFactHasExtract(fact: string | { extract: string } | null): fact is { extract: string } {
    return !!fact && typeof fact === 'object' && 'extract' in fact;
  }

  onSearch(city: string) {
    this.loading = true;
    this.error = null;
    this.weatherData = null;
    this.cityFact = null;
    this.cityImage = null;

   
    this.weatherService.getWeather(city).subscribe({
      next: (data: any) => (this.weatherData = data),
      error: () => (this.error = 'Weather not found')
    });

    this.factService.getCityFact(city).subscribe({
      next: (fact: any) => (this.cityFact = fact),
      error: () => (this.cityFact = 'No fact available')
    });

    // City image API
    this.unsplashService.getCityImage(city).subscribe({
      next: (url: string) => (this.cityImage = url),
      error: () => (this.cityImage = null),
      complete: () => (this.loading = false)
    });
  }
}
