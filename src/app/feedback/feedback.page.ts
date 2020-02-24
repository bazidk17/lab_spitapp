import { Component, OnInit } from '@angular/core';
import {  ToastController } from '@ionic/angular';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  async showToast(){
    const toast = await this.toastController.create({
      message: 'Form has been submitted.',
      duration: 500,
      color: 'dark'
    });
    toast.present();
  }

}
