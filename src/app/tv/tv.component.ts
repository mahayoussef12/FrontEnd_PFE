import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Rendez_vousService} from "../services/rendez_vous.service";
import {DatePipe} from "@angular/common";
import {rendez_vous} from "../rendez_vous";

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  countDown: Subscription | undefined;


  tick = 1000;
  detailId: any;
  rendez_vouss!:rendez_vous[];
  date!:Date;
  purchaseDate!:Date;
  timeVar:any;
  time:any ;
  lists: any[] | undefined;

  listDate: any[] | undefined;
  listClient:String [] | undefined;

  listff:any[] | undefined

  item!:number;
  pipe = new DatePipe('en-US');
  enSeconde:any;

  arr:number[]=[]
  private hour!: number;
  private min!: number;
  private seconde!: number;
  private sous_hour!: string;
  private sous_minute!: string;
  private sous_seconde!: string;
  private maha!: string;





  constructor(private route: ActivatedRoute,private rdvService:Rendez_vousService, private router: Router) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {



    this.detailId = this.route.snapshot.params["id"];
    console.log(this.detailId)
    this.rdvService.def(this.detailId).subscribe((response)=>{
      this.lists= response

      for (let i in this.lists){
        this.maha=this.lists[i].substring(0,1)+0+0+0+this.lists[i].substring(2,4)+ 0+this.lists[i].substring(5,7)

        this.sous_hour=this.lists[i].substring(0,1);


  this.sous_minute=this.maha.substring(2,5)
        console.log(this.sous_minute)
        this.sous_seconde=this.maha.substring(7,10)
        console.log(this.sous_seconde)
        this.hour=Number(this.sous_hour);

        this.min=Number(this.sous_minute);

        this.seconde=Number(this.sous_seconde);
        console.log(this.hour)
        this.enSeconde=this.hour*3600+this.min*60+this.seconde
        console.log(this.enSeconde)
        this.arr.push(this.enSeconde)
        for(let i in this.arr){
          this.countDown = timer(0, this.tick).subscribe(() => --this.arr[i]);
        }
      }})
    this.rdvService.getRdvclient(this.detailId).subscribe((response)=>{
      this.listClient= response
      ;})
    this.rdvService.getRdvDate(this.detailId).subscribe((response)=>{
      this.listDate= response
      ;})


    let date: Date = new Date();
  }
}




@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ("00" + hours).slice(-2) +
      ":" +
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
