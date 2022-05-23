import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "../profile/profile.component";
import {EditProfileComponent} from "./edit-profile.component";

const routes: Routes = [
  {path:":id",component:EditProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
