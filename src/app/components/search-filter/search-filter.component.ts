import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent implements OnInit {
  tripForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.tripForm = this.fb.group({
      countryToVisit: [''],
      countryComingFrom: [''],
      dateFrom: [''],
      dateTo: [''],
      budget: [''],
      hotel: [false],
      flight: [false],
      taxi: [false]
    });
  }

  planTrip() {
    console.log('Trip planned with data:', this.tripForm.value);
  }
}
