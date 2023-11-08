import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { RoomList, Room } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './rooms-services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit,AfterViewInit,AfterViewChecked, OnDestroy {
  public hotelName: string = 'Continental Hotel';
  public numberOfRooms: number = 20;
  public hiddenRooms: boolean = false;
  public rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };
  roomsList: RoomList[] | null = [];
  selectedRoom!: RoomList;
  roomListTitle: string = 'Rooms List';
  totalBytes:number = 0;
  subscription! : Subscription

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError(err=>{
      this.error$.next(err.message);
      return of([]);
    })
  )

  countRooms$ = this.roomsService.getRooms$.pipe(
    map(rooms => rooms.length)
  )

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
    observer.error('Observer Error');
  });

  // acces one component
  @ViewChild(HeaderComponent,{static : false}) headerComponent!: HeaderComponent;

  //acces all components
  @ViewChildren(HeaderComponent) headerChildrenComp!:QueryList<HeaderComponent>;
  

  constructor(@SkipSelf() private roomsService:RoomsService,private serviceConfig:ConfigService) {}

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

    console.log(this.serviceConfig);
    this.roomsService.getRooms()
                      .subscribe(rooms=>{
                                          this.roomsList = rooms
                                        });

    this.stream.subscribe({
      next:(value) => console.log(value),
      complete: ()=>console.log('complete'),
      error:(err)=> console.log(err)
    });

    this.roomsService.getPhotos().subscribe((event) =>{
      
      switch(event.type){
        case HttpEventType.Sent:{
          console.log('Request has benn made !');
          break;
        }
        case HttpEventType.ResponseHeader : {
          console.log('Request succes!');
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.totalBytes += event.loaded;
        }
      }
    });
  }

  togle() {
    this.hiddenRooms = !this.hiddenRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
  const room:RoomList = {
    //roomNumber: '4',
    roomType: 'Deluxe Room',
    amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 340,
    photos:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.9,
  };
  
   this.roomsService.addRoom(room).subscribe(data => this.roomsList = data);
  }

  editRoom(){
    const room:RoomList = {
      roomNumber: '2',
      roomType: 'Normal Room',
      amentities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 40,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.3,
    };

    this.roomsService.editRoom(room).subscribe(data => this.roomsList = data);
    
  }

  deleteRoom(){
    this.roomsService.deleteRoom('1').subscribe(data => this.roomsList = data);
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
