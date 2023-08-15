import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  constructor() { }

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    this.results = this.locationList
      .filter( (location: HousingLocation) => 
        location.city.toLowerCase().includes(searchText.toLowerCase())
      )
      // TODO: Try to use below function instead
  }

  // TODO: Could be extended to more properties...
  private isLocationSearched(location: HousingLocation, searchText: string) {
    location.city.toLowerCase().includes(searchText.toLowerCase())
  }

}
