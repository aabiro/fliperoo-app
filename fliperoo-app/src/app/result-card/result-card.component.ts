import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
  retailOutlet = "Walmart";
  quantity = 3;
  price = 5.89;
  //mapImg;//
  //long/lat?


  constructor(){ //r: string, q: number, p: number) {
    // this.retailOutlet = r;
    // this.quantity = q;
    // this.price = p;
  }

  ngOnInit() {
  }

}
