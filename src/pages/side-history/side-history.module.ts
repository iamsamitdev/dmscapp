import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideHistoryPage } from './side-history';

@NgModule({
  declarations: [
    SideHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SideHistoryPage),
  ],
})
export class SideHistoryPageModule {}
