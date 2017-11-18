import { Component, OnInit } from '@angular/core';
import {RecieveJsonService} from '../recieve-json.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private rs: RecieveJsonService) { }

  clickMe() {
    this.rs.recieveJSON();
  }

  ngOnInit() {
  }

}
