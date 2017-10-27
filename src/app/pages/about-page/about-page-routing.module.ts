import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "app/pages/about-page/about/about.component";

const routes: Routes = [{
  path: 'about',
  component: AboutComponent,
  data: {
    title: 'About'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutPageRoutingModule { }