import { Component } from '@angular/core';

import { Platform,MenuController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route: Router,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  gotoHome() {
    this.route.navigate(["/home"]);
    // window.location.replace("/home");
    this.menuCtrl.close();
  }
  gotoTT() {
    this.route.navigate(["/timetable"]);
    // window.location.replace("/form");
    this.menuCtrl.close();
  }
  gotoFeedback() {
    this.route.navigate(["/feedback"]);
    // window.location.replace("/form");
    this.menuCtrl.close();
  }
  gotoHttp() {
    this.route.navigate(["/http-exposure"]);
    // window.location.replace("/form");
    this.menuCtrl.close();
  }
}
