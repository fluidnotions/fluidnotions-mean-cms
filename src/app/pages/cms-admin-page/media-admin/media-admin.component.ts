import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "app/services/rest-client.service";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-media-admin',
  templateUrl: './media-admin.component.html',
  styleUrls: ['./media-admin.component.scss']
})
export class MediaAdminComponent implements OnInit {

  fileList: FileList;
  form: any;
  mediaGalleryUrl: any;
  currentImg: string;

  constructor(private client: RestClientService, public sanitizer: DomSanitizer) { 
    this.mediaGalleryUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.client.prefixWithBaseUrl('photos'));
    window.addEventListener('message', (e) => {
      var message = e.data;
      this.currentImg = this.client.prefixWithBaseUrl(message.currentImg);
      console.log("currentImg: "+this.currentImg);
    });
  }

  ngOnInit() {
  }

  

  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (this.fileList.length > 0) {
      let file: File = this.fileList[0];
      console.dir(file);
      this.client.uploadFile(file)
      .subscribe((status) => {
        console.log("status: "+ status);
        this.formSubmitted = false;
        this.form = null;
      })
    }
  }

  fileChange(event) {
    this.fileList = event.target.files;
    console.dir(this.fileList);
  }
}