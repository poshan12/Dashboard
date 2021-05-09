import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenuModule } from 'primeng/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NewmenuComponent } from './newmenu/newmenu.component';
import { ContentComponent } from './content/content.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SplitterModule } from 'primeng/splitter';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {MegaMenuModule} from 'primeng/megamenu';
import {ProgressBarModule} from 'primeng/progressbar';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ButtonModule,
    TabMenuModule,
    TieredMenuModule,
    ProgressBarModule,
    MenuModule,
    CardModule,
    ChartModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    SplitterModule,MegaMenuModule,
    BreadcrumbModule,ProgressBarModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    MenubarComponent,
    SidebarComponent,
    TopBarComponent,
    NewmenuComponent,
    ContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
