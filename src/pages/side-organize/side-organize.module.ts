import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideOrganizePage } from './side-organize';

@NgModule({
  declarations: [
    SideOrganizePage,
  ],
  imports: [
    IonicPageModule.forChild(SideOrganizePage),
  ],
})
export class SideOrganizePageModule {}
