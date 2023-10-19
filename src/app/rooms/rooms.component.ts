import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { RoomList, Room } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './rooms-services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit,AfterViewInit,AfterViewChecked {
  public hotelName: string = 'Continental Hotel';
  public numberOfRooms: number = 20;
  public hiddenRooms: boolean = false;
  public rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };
  public roomsList: RoomList[] = [];
  selectedRoom!: RoomList;
  roomListTitle: string = 'Rooms List';

  // acces one component
  @ViewChild(HeaderComponent,{static : false}) headerComponent!: HeaderComponent;

  //acces all components
  @ViewChildren(HeaderComponent) headerChildrenComp!:QueryList<HeaderComponent>;
  

  constructor(@SkipSelf() private roomsService:RoomsService) {}

  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
    // aproape niciodata folosit pentru ca angular ruleaza change detection de 2 ori 
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComp.last.title = "Last Title";
    this.headerChildrenComp.first.title = "First Title";
    let secondComp = this.headerChildrenComp.find(x=>x.title == "");
   
    if(secondComp !== undefined){
      secondComp.title = "Second Title";
    }
    else{
      console.log("the comp are undefined");
    }
    console.log(secondComp);
    console.log(this.headerChildrenComp.get(1));
    
  }

  ngOnInit(): void {
    this.roomsList = this.roomsService.getRooms();
  }

  togle() {
    this.hiddenRooms = !this.hiddenRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
   this.roomsList = this.roomsService.addRoom();
  }
}
