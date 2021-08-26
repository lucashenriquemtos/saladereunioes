import {Component, OnInit} from '@angular/core';
import {RoomDetaisComponent} from "../room-detais/room-detais.component";
import {Observable} from "rxjs";
import {RoomService} from "../room.service";
import {Room} from "../room";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Observable<Room[]>;

  constructor(private room: RoomService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData() {
    this.room = this.roomService.getRoomList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data)
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  roomDetails(id: number) {
    this.router.navigate(['datails'], id);
  }

  updateRoom(id: number) {
    this.router.navigate(['uptade'], id);
  }
}
