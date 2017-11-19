import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-result',
  templateUrl: './image-result.component.html',
  styleUrls: ['./image-result.component.css']
})
export class ImageResultComponent implements OnInit {
  jsonData: any;
  itemName1= "Doritos";
  itemName2= "Cheetos";
  itemName3= "Lays Regular";

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
       this.jsonData = JSON.parse(params['jsonData']);
       console.log(this.jsonData);
    });
  }

  ngOnInit() {
  }

}
