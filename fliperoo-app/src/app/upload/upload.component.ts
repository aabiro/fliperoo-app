import { Component, OnInit } from '@angular/core';
import {RecieveJsonService} from '../recieve-json.service';

import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import * as $ from 'jquery';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  JSON: any;
  obj: any;



  constructor(private rs: RecieveJsonService, private http: HttpClient) {
    this.JSON = JSON;
  }

  clickMe() {
    this.rs.recieveJSON();
  }

  compare(a,b) {
    if (a.score < b.score)
      return 1;
    if (a.score > b.score)
      return -1;
    return 0;
  }

  search() {
    console.log(this.obj);

  }

  whytho(event: any, filespot: any) {
    event.preventDefault();
    var formData = new FormData(filespot);
    formData.append('images_file', filespot.files[0]);
    this.obj = {
      data: []
    };

    this.http.post(
      '/api', formData
    ).subscribe(data => {
      console.log("DATA", data);

      var allresults = data["images"][0].classifiers[0].classes;
      for(var i=0; i<3; i++){
         this.obj.data.push({score: allresults[i].score, prodName : allresults[i].class });
      }
    });

    // if (filespot.files && filespot.files[0]) {
    //   console.log("FILE FOUND");
    //   var reader = new FileReader();
    //
    //   reader.onload = (event:any) => {
    //     console.log(event.target.result);
    //     this.http.post(
    //       '/api',
    //       {
    //         params: new HttpParams().set('myImage', event.target.result)
    //       }
    //     ).subscribe(data => {
    //       console.log("DATA", data);
    //     });
    //   }
    //
    //   reader.readAsDataURL(filespot.files[0]);
    // }
  // $.ajax({
  //     url: "/api",
  //     type: "POST",
  //     dataType: 'text',
  //     contentType: false,
  //     processData: false,
  //     cache: false,
  //     data: formData,
  //     success: function(response) {
  //         alert("success");
  //         var js = JSON.parse(response);
  //         var allresults = js.images[0].classifiers[0].classes;
  //          for(var i=0; i<allresults.length; i++){
  //            obj.push({score: allresults[i].score, prodName : allresults[i].class });
  //          }
  //        obj.sort(this.compare);
  //        for(var j = 0; j<obj.length; j++){
  //            alert("score is: " + obj[j].score + " , name is: " + obj[j].prodName);
  //        }
  //     },
  //     error: function(err) {
  //      alert("no");
  //
  //     }
  // }); 
  }


  ngOnInit() {
  }

}
