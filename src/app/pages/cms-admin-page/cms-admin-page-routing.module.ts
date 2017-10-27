import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditContentComponent } from "app/pages/cms-admin-page/edit-content/edit-content.component";
import { MediaAdminComponent } from "app/pages/cms-admin-page/media-admin/media-admin.component";

const routes: Routes = [{
  path: 'admin/content',
  component: EditContentComponent,
  data: {
    title: 'Manage Content'
  }
}, {
  path: 'admin/media',
  component: MediaAdminComponent,
  data: {
    title: 'Manage Media'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsAdminPageRoutingModule { }

