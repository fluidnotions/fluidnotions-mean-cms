import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ConfigureService } from 'ng4-configure/ng4-configure';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContentItem } from "app/models/content.model";

@Injectable()
export class RestClientService {

  result:any;
  private baseUrl: string;
  baseRest: string;

  constructor(private http: Http, private configService: ConfigureService) { 
     this.baseUrl = `${configService.config.host.PROTOCOL}://${configService.config.host.HOST_NAME}:${configService.config.host.PORT}`;
    //  this.baseRest = `${this.baseUrl}/api/`;
    this.baseRest = `${this.baseUrl}/`;
  }

  prefixWithBaseUrl(configValue: string){
    return `${this.baseUrl}/${configValue}`;
  }

  prefixWithRestBase(url: string){
    return `${this.baseRest}/${url}`;
  }

  saveContentItem(item: ContentItem) {
    return this.http.post(this.prefixWithRestBase('content-item'), item);
  }

  uploadFile(file: File){
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      let options = new RequestOptions({ "headers": headers });
      return this.http.post(`${this.baseUrl}/upload`, formData, options)
        .map(res => {
          return res.json()
        })
        
        
  }

}
