import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-drop-do-wn',
  templateUrl: './drop-do-wn.component.html',
  styleUrls: ['./drop-do-wn.component.scss']
})
export class DropdownComponent {
  countries = ['United Kingdom', 'United States'];
  states: string[] = [];
  cities: string[] = [];

  selectedCountry: string;
  selectedState: string;

  constructor() {}

  onCountryChange() {
    // Reset states and cities dropdowns
    this.states = [];
    this.cities = [];
    
    if (this.selectedCountry === 'United Kingdom') {
      this.states = ['California', 'Texas', 'New York'];
    } else if (this.selectedCountry === 'United States') {
      this.states = ['England', 'Scotland', 'Wales'];
    }
  }

  onStateChange() {
    // Reset cities dropdown
    this.cities = [];

    // Simulate city data based on selected state
    if (this.selectedState === 'California') {
      this.cities = ['Los Angeles', 'San Francisco', 'San Diego'];
    } else if (this.selectedState === 'Texas') {
      this.cities = ['Houston', 'Austin', 'Dallas'];
    } else if (this.selectedState === 'New York') {
      this.cities = ['New York City', 'Buffalo', 'Rochester'];
    } else if (this.selectedState === 'England') {
      this.cities = ['London', 'Manchester', 'Birmingham'];
    } else if (this.selectedState === 'Scotland') {
      this.cities = ['Edinburgh', 'Glasgow', 'Aberdeen'];
    } else if (this.selectedState === 'Wales') {
      this.cities = ['Cardiff', 'Swansea', 'Newport'];
    }
  }
}