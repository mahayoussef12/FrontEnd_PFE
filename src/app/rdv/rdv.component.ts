import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Rendez_vousService} from "../services/rendez_vous.service";
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../Entreprise";

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RdvComponent implements OnInit {

  date : any;


  private min!: string;
test!: Entreprise[];

constructor(private rdv:Rendez_vousService,private entrepriseservice:EntrepriseService) {
}
  ngOnInit() {
    /* this.rdv.test(1).subscribe((prod)=>{
       this.test=prod
       for (let i of this.test){
           var tdate:any=this.test[i]
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
           this.min=month+"/"+date+"/"+year
       }
       console.log(prod)
     })*/
    this.entrepriseservice.getAllEntreprise().subscribe((prod) => {
      this.test = prod
    })
  }

  dateFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
      const day = date!.getDay();
      return day !== 0 && day !== 6;
      //0 means sunday
      //6 means saturday
    }



  myHolidayDates = [

    new Date("05/18/2022"),

    new Date("28/18/2022"),




  ];


  myHolidayFilter = (d: Date|null) : boolean => {
    const date = d || new Date();

    const time=d!.getTime()
    const day = date!.getDay();
    const test=day !== 0 && day !== 6
    return !this.myHolidayDates.find(x=>x.getTime()==time)&& test;


  }
}



