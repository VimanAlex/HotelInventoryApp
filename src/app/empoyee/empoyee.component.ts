import { Component, OnInit, Self } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomsService } from '../rooms/rooms-services/rooms.service';

@Component({
  selector: 'hinv-empoyee',
  templateUrl: './empoyee.component.html',
  styleUrls: ['./empoyee.component.scss'],
  providers:[RoomsService]
})
export class EmpoyeeComponent implements OnInit {
  
  employeeName:string = 'Alex';

  constructor(@Self() private roomService:RoomsService){}

  ngOnInit(): void {
    
  }

}
