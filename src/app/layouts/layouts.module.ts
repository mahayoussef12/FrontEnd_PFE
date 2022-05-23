import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import {RouterModule} from "@angular/router";
import { EntrepriseLayoutComponent } from './entreprise-layout/entreprise-layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';



@NgModule({
  declarations: [
    ClientLayoutComponent,
    EntrepriseLayoutComponent,
    LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
