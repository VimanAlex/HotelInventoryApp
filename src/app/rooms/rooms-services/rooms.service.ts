import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList:RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1600494448850-6013c64ba722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('21-Nov-2023'),
      rating: 5.0,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1619218005459-c8651c2f5918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('21-Nov-2023'),
      rating: 3.74,
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1625197246835-64c46cb056d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1962&q=80',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('21-Nov-2023'),
      rating: 4.52545454,
    },
  ];

  constructor() { }

  getRooms(){
    
    return this.roomsList;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 400,
      photos:
        'https://images.unsplash.com/photo-1600494448850-6013c64ba722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('21-Nov-2023'),
      rating: 2.0,
    };
    //this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room];

    return this.roomsList;
  }
}
