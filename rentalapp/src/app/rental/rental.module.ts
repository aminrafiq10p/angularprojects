import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {RentalComponent} from './rental.component';
import {RentalListComponent} from './rental-list/rental-list.component';
import {RentalCreateComponent} from './rental-create/rental-create.component';
import {RentalDetailComponent} from './rental-detail/rental-detail.component';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListComponent},
      {path: 'add', component: RentalCreateComponent},
      {path: ':rentalId/edit', component: RentalCreateComponent},
      {path: ':rentalId', component: RentalCreateComponent},
      {path: ':city/homes', component: RentalCreateComponent},
    ],
  },
];
@NgModule({
  declarations: [RentalComponent, RentalListComponent, RentalCreateComponent, RentalDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  })
export class RentalModule { }
