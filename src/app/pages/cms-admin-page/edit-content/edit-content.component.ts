import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { RestClientService } from "app/services/rest-client.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit {

  ckeConfig: any;
  editorContent: string;

  constructor(public dialog: MatDialog) {
    this.editorContent = `<h1>This is test content</h1>`
  }

  ngOnInit() {
    this.ckeConfig = {
      height: 400,
      toolbar: [
        { name: 'editing', items: ['Scayt', 'Find', 'Replace', 'SelectAll'] },
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
        { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
        { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar', 'Iframe'] },
        { name: 'tools', items: ['Maximize', 'ShowBlocks', 'Preview', 'Print', 'Templates'] },
        { name: 'document', items: ['Source'] },
        '/',
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'CreateDiv', '-', 'Blockquote']
        },
        { name: 'justify', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
        { name: 'styles', items: ['Styles', 'Format', 'FontSize'] }
      ]
    }
  }

  //fast and dirty solution
  // hidelabel(event) {
  //   var target = event.target || event.srcElement || event.currentTarget;
  //   //hide label text span - directive would be more useful
  //   target.nextElementSibling.firstChild.hidden = true;
  // }


  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {

      form.reset();
      this.formSubmitted = false;
    }
  }

  displayGalleryIframeModal() {
    let dialogRef = this.dialog.open(GalleryIframeComponent, {
      width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}

@Component({
  selector: 'gallery-iframe',
  template: `<div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" [src]='mediaGalleryUrl'></iframe>
    </div>`,

})
export class GalleryIframeComponent {

  mediaGalleryUrl: any;
  currentImg: string;

  constructor(
    public dialogRef: MatDialogRef<GalleryIframeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private client: RestClientService, public sanitizer: DomSanitizer) {
    this.mediaGalleryUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.client.prefixWithBaseUrl('photos'));
    window.addEventListener('message', (e) => {
      var message = e.data;
      this.currentImg = this.client.prefixWithBaseUrl(message.currentImg);
      console.log("currentImg: " + this.currentImg);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
