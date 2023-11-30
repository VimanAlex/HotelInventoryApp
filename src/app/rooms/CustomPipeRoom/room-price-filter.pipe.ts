import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from '../rooms';

@Pipe({
  name: 'roomPriceFilter'
})
export class RoomPriceFilterPipe implements PipeTransform {

  transform(roomList:RoomList[],price:number | null): RoomList[] {
    if(price !== null){
      return roomList.filter(rooms => rooms.price >= price);
    } 
    return roomList;    
  }
}
