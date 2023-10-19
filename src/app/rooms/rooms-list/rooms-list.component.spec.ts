import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListComponent } from './rooms-list.component';

describe('RoomListComponent', () => {
  let component: RoomListComponent;
  let fixture: ComponentFixture<RoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomListComponent]
    });
    fixture = TestBed.createComponent(RoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
