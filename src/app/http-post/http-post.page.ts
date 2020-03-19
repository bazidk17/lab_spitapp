import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ToastController } from '@ionic/angular';
// import { File } from '@ionic-native/file';

export interface User {

  email: string,
  first_name: string,
  last_name: string,

}

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.page.html',
  styleUrls: ['./http-post.page.scss'],
})
export class HttpPostPage implements OnInit {
  link = 'https://reqres.in/api/users?page=0&per_page=12';
  users: User[] = [];

  constructor(private http: HttpClient, public toastController: ToastController) { 
    http.get(this.link).subscribe(data => {
      this.users = data['data'];
    });
  }

  ngOnInit() {
  }

  txtFName;
  txtLName;
  txtEmail;

  async showToast(){
    const toast = await this.toastController.create({
      message: 'Your form has been submitted.',
      duration: 500,
      color: 'dark'
    });
    toast.present();
  }
  postDetails(){
    // var string_data = JSON.stringify();
    var data = { first_name:this.txtFName, last_name: this.txtLName , email: this.txtEmail};
    
    this.users.unshift(data);
    this.http.post('https://reqres.in/api/users?page=0&per_page=12', data).subscribe(data => {
      // alert("done");
      this.showToast();
    }, error => {
      alert("Error " + error.error);
    });

  }
}
