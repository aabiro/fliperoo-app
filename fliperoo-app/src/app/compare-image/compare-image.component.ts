import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare-image',
  templateUrl: './compare-image.component.html',
  styleUrls: ['./compare-image.component.css']
})
export class CompareImageComponent implements OnInit {

    test: any;
    prdName: any;
    passItems: any;
  constructor(private route: ActivatedRoute) {
    // this.passItems =  {
    //   data= []
    // };
    //    this.route.params.subscribe(params => {
    //      this.test = JSON.parse(params['jsonData']);
    //      this.prdName =this.test.data[0].prodName;
    //      $.get("https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code="
    //      +"N6G1A1&sid=4296250855351882&q="+this.prdName,function(data){
    //        var foundItems =data.items;
    //        for(var j=0; j<4; j++){
    //          // this.passItems.data.push({name: data.items[j].name, url : data.items[j].clipping_image_url });
    //        }
    //      });
    //    // this.test =params;
    //    // console.log(this.test);
    // });

   }

  ngOnInit() {
  }

}
