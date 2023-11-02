import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../rooms-services/rooms.service';

@Component({
  selector: 'hinv-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent {

  roomModel:RoomList = {
  roomType: '',
  amentities: '',
  price: 0,
  rating:0,
  photos: '',
  checkinTime: new Date(),
  checkoutTime: new Date()
  };

  successMessage : string = "";

  constructor(private roomSerive:RoomsService){}

  AddRoom()
  {
    this.roomSerive.addRoom(this.roomModel).subscribe(response=> 
    this.successMessage = "Room Added Successfully"
      
  )
  };

  isValidRoomType():boolean{
    if(this.roomModel.roomType.length === 20){
      return true;
    }
    else{
     return false;
    }   
  };

  minLenghtRoomType():boolean{
    if(this.roomModel.roomType.length < 3){
      return true;
    }
    else{
      return false;
    }
  }
}
