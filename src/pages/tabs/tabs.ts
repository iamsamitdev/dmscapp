import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabDmscPage } from '../tab-dmsc/tab-dmsc';
import { TabNewsPage } from '../tab-news/tab-news';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabContactPage } from '../tab-contact/tab-contact';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = TabHomePage
  tab2Root: any = TabDmscPage
  tab3Root: any = TabNewsPage
  tab4Root: any = TabArticlePage
  tab5Root: any = TabContactPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
