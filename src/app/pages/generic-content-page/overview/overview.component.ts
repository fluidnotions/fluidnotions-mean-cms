import { isNullOrUndefined } from 'util';
import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { ContentItem } from "app/models/content.model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  contentType = "ServicePosts"
  items: ContentItem[];
  decks = [];
  constructor(private localStorageService: LocalStorageService) {
    //check for session stored content
    let interval = setInterval(() => {
      let services = this.localStorageService.get(this.contentType)
      if (!isNullOrUndefined(services)) {

        console.log(this.contentType);
        clearInterval(interval);
        let originalServiceContentItems = services as ContentItem[];
        this.items = originalServiceContentItems.map(item =>{
            return item;
          })
        this.breakIntoDecks(this.items);
      }
    }, 1000);
  }

  breakIntoDecks(services: ContentItem[]){
    for(var i=0; i< services.length; i=i+3){
      let deck = [];
      if(services[i]) deck.push(services[i]);
      if(services[i+1]) deck.push(services[i+1]);
      if(services[i+2]) deck.push(services[i+2]);
      this.decks.push(deck);
    }

  }

  ngOnInit() {
  }

}
