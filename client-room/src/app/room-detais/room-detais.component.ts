import {Component, OnInit} from '@angular/core';
import {Room} from "../room";
import {ActivatedRoute, Router} from "@angular/router";
import {RoomService} from "../room.service";

@Component({
  selector: 'app-room-detais',
  templateUrl: './room-detais.component.html',
  styleUrls: ['./room-detais.component.css']
})
export class RoomDetaisComponent implements OnInit {

  id!: number
  room!: Room

  constructor(private route: ActivatedRoute, private router: Router,
              private roomService: RoomService) {
  }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id)
      .subscribe((data: Room) => {
          console.log(data)
          this.room = data;
        },
        (error: any) => console.log(error))
  }
  list(){
    this.router.navigate(['rooms']);
  }


}
