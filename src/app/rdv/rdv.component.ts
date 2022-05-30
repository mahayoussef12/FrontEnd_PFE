import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Rendez_vousService} from "../services/rendez_vous.service";
import {EntrepriseService} from "../services/entreprise.service";
import {Entreprise} from "../Entreprise";
import {DatePipe} from "@angular/common";
import {ServiseService} from "../services/servise.service";
import {service} from "../servise";

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RdvComponent implements OnInit {
  selectedTime: Date | null = null;
  date: any;

  pipe = new DatePipe('en-US');
  private day!: string;
  private month!: string;
  private year!: number;

  private test!: any;
  private maha: Date[]=[];
 min!: Date;
 entreprise!: Entreprise[];
serv!: service[];



  constructor(private rdv: Rendez_vousService, private entrepriseservice: EntrepriseService,private service:ServiseService) {
  }

  ngOnInit() {

    this.rdv.test(1).subscribe((prod) => {
      this.test = prod
      for (let i in this.test) {
this.year=this.test[i].substring(0,4)
        this.month=this.test[i].substring(5,7)
        this.day=this.test[i].substring(8,10)
        this.date=this.month+"/"+this.day+"/"+this.year
       this.maha.push(new Date(this.date))
      }
      console.log(this.maha)
    })
     this.entrepriseservice.getAllEntreprise().subscribe((prod) => {
       this.entreprise = prod
     })
    this.service.listService(2).subscribe(prod => {
      this.serv = prod;
      console.log(this.serv)  }
    )
  }

  dateFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
      const day = date!.getDay();
      return day !== 0 && day !== 6;
      //0 means sunday
      //6 means saturday
    }





  myHolidayFilter = (d: Date| null): boolean => {
    const time=d!.getTime();
    const day = d!.getDay();
    const weekend=day !== 0 && day !== 6;
    return !this.maha.find(x=>x.getTime()==time)&&weekend;

  }

}


