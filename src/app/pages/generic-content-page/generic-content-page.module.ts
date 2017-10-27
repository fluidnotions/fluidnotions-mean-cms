import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { GenericContentPageRoutingModule } from "app/pages/generic-content-page/generic-content-page-routing.module";

@NgModule({
  imports: [
    CommonModule,
    GenericContentPageRoutingModule
  ],
  declarations: [OverviewComponent, DetailComponent]
})
export class GenericContentPageModule { }
