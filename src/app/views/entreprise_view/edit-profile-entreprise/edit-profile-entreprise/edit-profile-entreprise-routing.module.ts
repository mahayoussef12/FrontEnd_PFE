import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompteEntrepriseComponent} from "../../compte-entreprise/compte-entreprise.component";
import {EditProfileComponent} from "../../../client_view/edit-profile/edit-profile.component";

const routes: Routes = [
  {path:":id",component:EditProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileEntrepriseRoutingModule { }
