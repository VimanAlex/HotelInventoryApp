import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm!:FormGroup;

}
