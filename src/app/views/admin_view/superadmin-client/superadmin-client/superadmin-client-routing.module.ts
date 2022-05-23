import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "../../admin/admin.component";
import {SuperadminClientComponent} from "../superadmin-client.component";

const routes: Routes = [
  {path:"",component:SuperadminClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminClientRoutingModule { }
