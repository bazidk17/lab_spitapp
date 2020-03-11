import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.page.html',
  styleUrls: ['./http-get.page.scss'],
})
export class HttpGetPage implements OnInit {

  constructor(private http: HttpClient) { }
  users:any;
  ngOnInit() {
  }
  getDetails() {
    this.http.get('https://reqres.in/api/users?page=0&per_page=12').subscribe(data => {
      console.log(data);
      this.users=data["data"];
    });
  }

}
