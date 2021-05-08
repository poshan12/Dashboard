import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { SlideMenuModule } from "primeng/slidemenu";
import { ButtonModule } from "primeng/button";
import { TabMenuModule } from "primeng/tabmenu";
import { TieredMenuModule } from "primeng/tieredmenu";
import { ProgressBarModule } from "primeng/progressbar";
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import {MenuModule} from 'primeng/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ButtonModule,
    TabMenuModule,
    TieredMenuModule,
    ProgressBarModule,MenuModule
  ],
  declarations: [AppComponent, NavbarComponent, MenubarComponent, SidebarComponent, TopBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
