import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guestControl() { // get a form control  from group
    return this.bookingForm.get('guestList') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // creare formGroup , proprietati , nested forms
    this.bookingForm = this.formBuilder.group({
      bookingId: new FormControl(''),
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: new FormControl('',{validators:[Validators.email,Validators.required]}),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl('',{validators:[Validators.required]}),
      guestName: new FormControl(''),
      bookingDate: new FormControl({value:new Date(),disabled:false}),
      mobileNumber: new FormControl('',{validators:[Validators.min(10)]}),
      addresses: this.formBuilder.group({ // neasted form
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guestCount: new FormControl(''),
      guestList: this.formBuilder.array([ // add  dynamicly control      
        this.addGuestControl()
      ]),
      termAndConditions: new FormControl(false,{validators:[Validators.required,Validators.requiredTrue]}) // requiredTreu folosit pentru checkbox , 
                                                                                                          //checkbox-ul trebuie sa fie true ca sa fie valid ,
                                                                                                          // use case : T&C
    });
  }

  addGuestControl(){ // create function to add group controll to avoid duplicate code
    return this.formBuilder.group({ guestName: new FormControl(),
                                    age: new FormControl()})
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue()); // folosim metoda getRowValue() in cazul in care avem controale care au proprietatea disabled = true pentru a putea lua valoarea din acel control.
    // in cazul in care folosim doar proprietatea value , atunci valoarea  controlul cu disabled = true,nu i se va face submit ;
    
    this.bookingForm.reset({
      bookingId:'',
      roomId: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      guestName: '',
      bookingDate: new Date(),
      mobileNumber:'',
      addresses: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guestCount: '',
      guestList: [],
      termAndConditions:false
    })
  
  }
  addGuest() {
    this.guestControl.push(this.addGuestControl());
  }

  addPassport(){
    this.bookingForm.addControl('passport',new FormControl()) // adaugare control dinamic in form(1 singur controler)
  }

  deletePassport(){

    if(this.bookingForm.get('passport')){ // remove control
      this.bookingForm.removeControl('passport')
    }
  }
  removeGuest(index:number){ // remove control from an ArrayFrom
    this.guestControl.removeAt(index);
  }
}
