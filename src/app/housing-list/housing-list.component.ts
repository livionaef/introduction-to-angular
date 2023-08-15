import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  ngOnInit(): void {
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    this.results = this.locationList
      .filter(location =>
        this.isLocationSearched(location, searchText)
      )
  }

  private isLocationSearched(location: HousingLocation, searchText: string) {
    const locationPropertiesToBeChecked = [
      location.city.toLowerCase(),
      location.state.toLowerCase(),
      location.name.toLowerCase(),
      location.availableUnits.toString()
    ]

    // The some() method tests whether at least one element in the array passes the test
    return locationPropertiesToBeChecked.some(
      property => property.includes(searchText.toLowerCase())
    )
  }

}
