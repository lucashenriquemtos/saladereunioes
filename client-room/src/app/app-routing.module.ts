import {RoomDetaisComponent} from "./room-detais/room-detais.component";
import {CreateRoomComponent} from "./create-room/create-room.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import {RoomListComponent} from "./room-list/room-list.component";
import {UpdateRoomComponent} from "./update-room/update-room.component"

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full'},
  { path: 'rooms', component: RoomListComponent},
  { path: 'add', component: CreateRoomComponent},
  { path: 'update/:id', component: UpdateRoomComponent},
  { path: 'details/:id', component: RoomDetaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
