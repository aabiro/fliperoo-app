import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from "angular2-image-upload";
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { CompareImageComponent } from './compare-image/compare-image.component';
import { HeaderComponent } from './header/header.component';
import { ImageResultComponent } from './image-result/image-result.component';
import { ResultCardComponent } from './result-card/result-card.component';
import {RecieveJsonService} from './recieve-json.service';


const appRoutes: Routes = [
{ path: '', component: UploadComponent },
{ path: 'result/:jsonData', component: ImageResultComponent },
{ path: 'items', component: CompareImageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    CompareImageComponent,
    HeaderComponent,
    ImageResultComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [RecieveJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
