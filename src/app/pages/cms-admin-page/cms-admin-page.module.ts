import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsAdminPageRoutingModule } from "app/pages/cms-admin-page/cms-admin-page-routing.module";
import { CKEditorModule } from 'ngx-ckeditor';
import { MediaAdminComponent } from './media-admin/media-admin.component';
import { EditContentComponent } from "app/pages/cms-admin-page/edit-content/edit-content.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";


@NgModule({
  imports: [
    CommonModule,
    CmsAdminPageRoutingModule,
    CKEditorModule,
    MDBBootstrapModule,
    FormsModule
  ],
  declarations: [EditContentComponent, MediaAdminComponent]
})
export class CmsAdminPageModule { }
