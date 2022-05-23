import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompteEntrepriseComponent} from "../../compte-entreprise/compte-entreprise.component";
import {ProfileEntrepriseComponent} from "../profile-entreprise.component";

const routes: Routes = [
  {path:":id",component:ProfileEntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEntrepriseRoutingModule { }
