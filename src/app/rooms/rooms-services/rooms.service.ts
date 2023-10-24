import { Injectable,Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList:RoomList[] = [];

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http:HttpClient) {
    
    console.log(this.config.apiEndoint);

   }

  getRooms(){   
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room);
  }

  editRoom(room:RoomList){

    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
  }

  deleteRoom(id:string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',{
      reportProgress:true
    });

    return this.http.request(request);
  }
}
