import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { bookingGuard } from './BookingGuards/booking.guard';

const routes: Routes = [{ path: '', component: BookingComponent,canDeactivate:[bookingGuard] }];
 // canDeactivated : previne parasirea paginii daca d ex ai inceput sa completezi date si nu ai termiant formularul ,
// sau atunci cand introduci date si nu ai temrinat de introdus datele si doresti sa paraesti pagina ,
// parasire pagina si afisare mesaj daca doresti sa paraesti pagina in timpul unei actiuni de completare a unor date de ex
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
