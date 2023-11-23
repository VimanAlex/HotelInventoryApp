import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent, mergeMap, switchMap } from 'rxjs';
import { BookingService } from './booking.service';
import { CustomValidators } from './Validators/custom-validators';


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

  get getFormValue(){
    return this.bookingForm.patchValue({
      bookingId :1
    })
  }

  constructor(private formBuilder: FormBuilder, private bookinService:BookingService) {}

  ngOnInit(): void {
    // creare formGroup , proprietati , nested forms, formArray
    this.bookingForm = this.formBuilder.group({
      bookingId: new FormControl(''),
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: new FormControl('',{updateOn:'blur' ,validators:[Validators.email,Validators.required]}), // updateOn: 'blur' - datele se updateaza doar atunci cand iesim din cadrul controlerului
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingAmount: new FormControl('',{validators:[Validators.required]}),
      guestName: new FormControl('',{validators:[Validators.minLength(5),Validators.required,CustomValidators.ValidateName]}),
      bookingDate: new FormControl({value:new Date(),disabled:false}),
      mobileNumber: new FormControl('',{validators:[Validators.min(1000000000),Validators.required]}),
      addresses: this.formBuilder.group({ // neasted form
        addressLine1: new FormControl('',{validators:[Validators.required]}),
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
      //{updateOn:'blur'});  folosim updateOn dupa creearea formului daca dorim ca aceasta actiun
      // sa se aplice pentru fiecare control din form              
    });

    this.getBookingFormData(); // metoda se apeleaza dupa construirea formului in ngOnInit()
    
    // valueChanges - ne permite sa primim sa avem acces in timp real la valorile 
    //introduse/schimbate din form in timp real
    //              - este un observables (data stream)              
    // use case - anumite validari
    
    this.bookingForm.valueChanges.subscribe((data)=>{
      console.log(data.guestEmail);  
    });

    this.bookingForm.valueChanges.pipe(
      switchMap(data=> this.bookinService.bookRoom(data))
    ).subscribe(data=>{console.log(data)})
 }

  addGuestControl(){ // create function to add group controll to avoid duplicate code
    return this.formBuilder.group({ guestName: new FormControl('',{validators:[Validators.required]}),
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

  getBookingFormData(){
    // pentru a seta valori default in form (data from api)
    // setValue - folosim atunci cand vrem ca toate controalele sa aiba valori default (toate controalele)
    //patchValue - ne permite sa adaugam valori default doar la controalele selectate de noi (unele controale)
    return this.bookingForm.patchValue({
      bookingId:'',
      roomId: '',
      guestEmail: 'test@gmail.com',
      checkinDate: '',
      checkoutDate: '',
      bookingAmount: '',
      guestName: 0,
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
    });
  }
}
