import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit,OnChanges,OnDestroy {

  @Input() rooms:RoomList[] = [];
  @Input() roomsListTitle:string = 'Rooms List';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    
    console.log(changes);

    if(changes['roomsListTitle']){

      this.roomsListTitle = changes['roomsListTitle'].currentValue.toUpperCase();
    }
  }
 
  ngOnInit(): void {
    
  }

  selectRoom(room:RoomList){
    
    this.selectedRoom.emit(room);
  };

  ngOnDestroy(): void {
    console.log("The Room List grid is destroyed");
  }

}


