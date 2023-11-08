import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomsComponent } from './rooms.component';
import { roomGuard } from './room-guards/room.guard';

const routes: Routes = [
  {path:'', component: RoomsComponent,canActivateChild:[roomGuard],children:[
  {path:'add',component:RoomAddComponent}, // add nested router
  {path:':id',component:RoomBookingComponent},
   // child route
  ]},
  //{path:'rooms/add',component:RoomAddComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
