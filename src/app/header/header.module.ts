import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent] // pentru a putea fi folosite si in alte module
})
export class HeaderModule { }
