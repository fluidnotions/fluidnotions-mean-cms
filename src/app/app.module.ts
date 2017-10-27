import { LocalStorageModule } from 'angular-2-local-storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactPageRoutingModule } from "app/pages/contact-page/contact-page-routing.module";
import { AppComponent } from "app/app.component";
import { AnimatedTextBannerComponent } from "app/components/animated-text-banner/animated-text-banner.component";
import { ContactPageModule } from "app/pages/contact-page/contact-page.module";
import { AppRoutingModule } from "app/app-routing.module";
import { AboutPageModule } from "app/pages/about-page/about-page.module";
import { AboutPageRoutingModule } from "app/pages/about-page/about-page-routing.module";
import { EventService } from "app/services/event.service";
import { PreloadPageContentService } from "app/services/preload-page-content.service";
import { NgConfigureModule, ConfigureOptions } from 'ng4-configure/ng4-configure'
import { ConfigOptions } from "./config.options";
import { GenericContentPageModule } from "app/pages/generic-content-page/generic-content-page.module";
import { GenericContentPageRoutingModule } from "app/pages/generic-content-page/generic-content-page-routing.module";
import { CmsAdminPageModule } from "app/pages/cms-admin-page/cms-admin-page.module";
import { CmsAdminPageRoutingModule } from "app/pages/cms-admin-page/cms-admin-page-routing.module";
import { RestClientService } from "app/services/rest-client.service";


@NgModule({
  declarations: [
    AppComponent,
    AnimatedTextBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot(),
    NgConfigureModule.forRoot(),
    LocalStorageModule.withConfig({
      storageType: 'sessionStorage',
      prefix: 'fn-content'
    }),
    AppRoutingModule,
    GenericContentPageModule,
    GenericContentPageRoutingModule,
    CmsAdminPageModule,
    CmsAdminPageRoutingModule,
    ContactPageModule,
    ContactPageRoutingModule,
    AboutPageModule,
    AboutPageRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [RestClientService, EventService, PreloadPageContentService, { provide: ConfigureOptions, useClass: ConfigOptions }],
  // entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
