import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabNewsPage } from './tab-news';

@NgModule({
  declarations: [
    TabNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabNewsPage),
  ],
})
export class TabNewsPageModule {}
