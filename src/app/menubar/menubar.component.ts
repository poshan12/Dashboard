import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.css"]
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      { label: "New", icon: "pi pi-fw pi-plus" },
      { label: "Open", icon: "pi pi-fw pi-download" },
      { label: "Undo", icon: "pi pi-fw pi-refresh" }
    ];
  }
}
