import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LOCAL_STORAGE_TOKEN } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
  
  title = 'HotelInventoryApp';
  role ='Admin' ;
  @ViewChild('divRef', {static: true}) divRef!: ElementRef

  constructor(@Optional() private loggerService:LoggerService,
  @Inject(LOCAL_STORAGE_TOKEN) private localStorage:Storage,
  private initService:InitService,
  private serviceConfig:ConfigService,
  private router:Router
  ){
    console.log(initService.config);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event)=> console.log(event));
    // this.divRef.nativeElement.innerText = "Text from App Component";
    this.loggerService?.log('AppComponent.OmInit()');
    this.localStorage.setItem('Name','Alex');
     let localName = this.localStorage.getItem('Name');
     console.log(localName);
  }
  ngAfterViewInit(): void {
    
    
  }

  //Acces template ref from app component.html
  // @ViewChild('user', {read : ViewContainerRef}) vcr!:ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef =  this.vcr.createComponent(RoomsComponent);

  //   componentRef.instance.roomListTitle = "";
  // }
}
