import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpoyeeComponent } from './empoyee/empoyee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomAddComponent } from './rooms/room-add/room-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './route-guards/login.guard';

const routes: Routes = [  
  {path:'login',component:LoginComponent},
  {path:'employee',component: EmpoyeeComponent, /*canActivate:[loginGuard]*/},
  {path:'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),  /*canActivate:[loginGuard]*/ },
  {path:'rooms',loadChildren:()=> import('./rooms/rooms.module').then(m=>m.RoomsModule),  /*canActivate:[loginGuard]*/}, // add lazy loadyng for rooms module
  {path:'', redirectTo:'/login',pathMatch:'full'}, // default path
  {path:'**',component:NotfoundComponent}// when the path is incorect 
 
];

// ng g m booking --route=booking --routing --module=app - comand line to add a module with routing and lazy loading from scratch

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
