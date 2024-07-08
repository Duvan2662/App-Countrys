import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPagesComponent,
    ContactPageComponent,
    SideBarComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
