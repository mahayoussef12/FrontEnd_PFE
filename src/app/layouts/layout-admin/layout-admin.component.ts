import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {admin} from "../../admin";

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {
admins!: admin[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getall().subscribe(prod => {
      this.admins = prod;
      console.log(this.admins)  }
    )
  }

}
