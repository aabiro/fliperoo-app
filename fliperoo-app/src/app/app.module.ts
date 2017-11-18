import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from "angular2-image-upload";


import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { CompareImageComponent } from './compare-image/compare-image.component';
import { HeaderComponent } from './header/header.component';
import { ImageResultComponent } from './image-result/image-result.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    CompareImageComponent,
    HeaderComponent,
    ImageResultComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
