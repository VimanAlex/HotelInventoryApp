import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  roomNumber!:number;

  roomNumber$ = this.router.paramMap.pipe(map(param  => param.get('id')));

  constructor(private router:ActivatedRoute) { }
  
  ngOnInit(): void {
  //  this.router.params.subscribe((param) => this.roomNumber = param['id']); don't use subscribe
  // this.roomNumber = this.router.snapshot.params['id']; foloseste snapshot pentru ca valoarea deja aflata in view , nu o sa se schimbe in caz ca este schimbata 
  // this.roomNumber$ = this.router.params.pipe(map((params) => params['id']));
}

}
