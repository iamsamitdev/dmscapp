import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SideAboutusPage } from '../pages/side-aboutus/side-aboutus';
import { SideOrganizePage } from '../pages/side-organize/side-organize';
import { SideHistoryPage } from '../pages/side-history/side-history';
import { SideReportPage } from '../pages/side-report/side-report';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabDmscPage } from '../pages/tab-dmsc/tab-dmsc';
import { TabNewsPage } from '../pages/tab-news/tab-news';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    SideAboutusPage,
    SideOrganizePage,
    SideHistoryPage,
    SideReportPage,
    TabHomePage,
    TabDmscPage,
    TabNewsPage,
    TabArticlePage,
    TabContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideAboutusPage,
    SideOrganizePage,
    SideHistoryPage,
    SideReportPage,
    TabHomePage,
    TabDmscPage,
    TabNewsPage,
    TabArticlePage,
    TabContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
