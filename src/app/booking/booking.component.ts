import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
   
    // creare formGroup , proprietati , nested forms
    this.bookingForm = this.formBuilder.group({
      bookingId : new FormControl(),
      roomId: new FormControl({value:'2', disabled:true}),
      guestEmail: new FormControl(),
      checkinDate: new FormControl(),
      checkoutDate: new FormControl(),
      bookingStatus: new FormControl(),     
      bookingAmount: new FormControl(),
      bookingDate: new FormControl(new Date()),
      mobileNumber: new FormControl(),
      guestName: new FormControl(),
      addresses : this.formBuilder.group({
        addressLine1: new FormControl(),
        addressLine2: new FormControl(),
        city: new FormControl(),
        state: new FormControl(), 
        country: new FormControl(),
        zipCode: new FormControl(),
      }),
      guestCount: new FormControl(),
      guestList:new FormControl()
    });
  }

  addBooking(){
    console.log(this.bookingForm.getRawValue()) // folosim metoda getRowValue() in cazul in care avem controale care au proprietatea disabled = true pentru a putea lua valoarea din acel control.
                                               // in cazul in care folosim doar proprietatea value , atunci valoarea  controlul cu disabled = true,nu i se va face submit ;
  }


}
