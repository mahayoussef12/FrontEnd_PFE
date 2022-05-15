
import { Component, OnInit } from '@angular/core';
import {render} from "creditcardpayments/creditCardPayments";


@Component({
  selector: 'app-payement-paypal',
  templateUrl: './payement-paypal.component.html',
  styleUrls: ['./payement-paypal.component.css']
})
export class PayementPaypalComponent implements OnInit {

  constructor() {


  }
  ngOnInit() {
      render({
        id:'#myPaypalButtons',
        currency:'USD',
        value:String(localStorage.getItem('total')),
        onApprove :(details)=>{alert ('transaction success')}
      })
    }


}
