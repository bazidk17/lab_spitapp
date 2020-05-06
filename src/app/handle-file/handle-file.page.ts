import { Component, OnInit } from '@angular/core';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-handle-file',
  templateUrl: './handle-file.page.html',
  styleUrls: ['./handle-file.page.scss'],
})
export class HandleFilePage implements OnInit {

  constructor(private document:DocumentViewer,private file:File,private transfer:FileTransfer) { }

  ngOnInit() {
  }
  openLocal(){
    const options:DocumentViewerOptions={
      title:'My PDF'
    }
    this.document.viewDocument('assets/color.pdf','application/pdf',options);
  }
  downloadNOpen(){

  }
}
