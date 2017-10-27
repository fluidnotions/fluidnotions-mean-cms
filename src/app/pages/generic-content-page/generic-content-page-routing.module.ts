import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from "app/pages/generic-content-page/overview/overview.component";


const routes: Routes = [{
  path: 'content',
  component: OverviewComponent,
  data: {
    title: 'content'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericContentPageRoutingModule { }
