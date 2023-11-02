import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomAddComponent } from './rooms/room-add/room-add.component';

const routes: Routes = [
  {path:'employee',component: EmpoyeeComponent},
  {path:'rooms', component: RoomsComponent},
  {path:'rooms/:id',component:RoomBookingComponent},
  {path:'room/add',component:RoomAddComponent},
  {path:'', redirectTo:'/rooms',pathMatch:'full'}, // default path
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
