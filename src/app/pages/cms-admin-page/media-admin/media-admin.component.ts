import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RestClientService } from "app/services/rest-client.service";

@Component({
  selector: 'app-media-admin',
  templateUrl: './media-admin.component.html',
  styleUrls: ['./media-admin.component.scss']
})
export class MediaAdminComponent implements OnInit {

  fileList: FileList;
  form: any;

  constructor(private client: RestClientService) { 
   
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