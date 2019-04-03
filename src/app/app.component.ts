import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideAboutusPage } from '../pages/side-aboutus/side-aboutus';
import { SideOrganizePage } from '../pages/side-organize/side-organize';
import { SideHistoryPage } from '../pages/side-history/side-history';
import { SideReportPage } from '../pages/side-report/side-report';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'เกี่ยวกับเรา', component: SideAboutusPage },
      { title: 'โครงสร้าง', component: SideOrganizePage },
      { title: 'ประวัติ', component: SideHistoryPage },
      { title: 'รายงาน', component: SideReportPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
