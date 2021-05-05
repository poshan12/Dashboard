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

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ButtonModule,
    TabMenuModule,
    TieredMenuModule,
    ProgressBarModule
  ],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
