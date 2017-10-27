import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-form',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit {

  ckeConfig: any;
  editorContent: string;

  constructor() {
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

}
