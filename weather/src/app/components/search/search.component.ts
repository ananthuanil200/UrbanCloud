import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city = '';
  @Output() searchCity = new EventEmitter<string>();

  onSearch() {
    if (this.city.trim()) {
      this.searchCity.emit(this.city);
      this.city = '';
    }
  }
}
