import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class RecieveJsonService {


  constructor() { }


    recieveJSON(){
        $.get("https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code="
        +"N6G1A1&sid=4296250855351882&q=banana",function(data){
          alert(Object.keys(data));
        });

    }

}
