import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css'],
})
export class RentalCreateComponent implements OnInit {
  newRental: Rental;
  rentalCategories = Rental.CATEGORIES;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
