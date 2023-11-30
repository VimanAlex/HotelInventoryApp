import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomListComponent } from './rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';
import { RoomPriceFilterPipe } from './CustomPipeRoom/room-price-filter.pipe';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomBookingComponent,
    RoomAddComponent,
    RoomPriceFilterPipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers:[
    {
    provide:RouteConfigToken,
    useValue:{title : 'Rooms'}
  },]
})
export class RoomsModule { }
