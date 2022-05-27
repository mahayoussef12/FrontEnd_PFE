import { Component, OnInit } from '@angular/core';
import {rendez_vous} from "../rendez_vous";
import {Rendez_vousService} from "../services/rendez_vous.service";
import {avis} from "../avis";
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {
  newrdv = new rendez_vous();
 min!: string;

 data!: (Date | undefined)[];
  private tab!: any[];

  myDpOptions: IAngularMyDpOptions = {
    dateRange:false ,
    dateFormat: 'dd.mm.yyyy',
    disableDates:
      [
]



    // other options are here...
  };

  myDateInit: boolean = true;
  model!: IMyDateModel;


  constructor() { }

  ngOnInit() {
    if (this.myDateInit) {
      // Initialize to specific date (14.05.2019) with IMyDate object
      this.model = {isRange: false, singleDate: {date: {
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            day: new Date().getDay()
          }}};
    }
    else {
      // Initialize to today with javascript date object
      this.model = {isRange: false, singleDate: {jsDate: new Date()}};
    }
  }



  //constructor(private rdvservice:Rendez_vousService) { }

  //ngOnInit(): void {
 /*   this.rdvservice.test(1).subscribe((prod=>{
      this.tab=prod
   console.log(prod)
    }));
    this.parsetime()*/
//  }

/*  test() {
    this.rdvservice.createRDV(this.newrdv).subscribe((prod)=>{
      console.log(prod);
      console.log("ajouter")
    })
  }*/
  /*parsetime(){
    var tdate:any=new Date();
    var date:any=tdate.getDate()
    if(date<10){
      date="0"+date;
    }
    var month:any=tdate.getMonth()+1
    if(month<10){month="0"+month}
    var year:any=tdate.getFullYear();
    var hours:any=tdate.getHours();
    var minutes:any=tdate.getMinutes()
    if(minutes<10){minutes="0"+minutes}
    this.min=year+"-"+month+"-"+date+"T"+hours+":"+minutes
    console.log(this.min)
  }
  onChange(value:any) {
    var todate:any=new Date().getTime();
    var selectDate:any= new Date (value).getTime()

for (let i of this.tab){
  if(this.tab[i].getTime()>selectDate){
    alert("test")
  }*/

/*
  weekendsDatesFilter = (d: Date): boolean => {
    const day = d.getDay();

    /!* Prevent Saturday and Sunday for select. *!/
    return day !== 0 && day !== 6 ;
  }
*/




}
