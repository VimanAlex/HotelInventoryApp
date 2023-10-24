export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber?: string;
  roomType: string;
  amentities: string;
  price: number;
  rating:number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
}
