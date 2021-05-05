import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep .ui-slidemenu {
        width: 13.5em;
      }
    `
  ]
})
export class AppComponent {
  items: MenuItem[];
  value: number = 0;
  ngOnInit() {
    this.items = [
      {
        label: "File",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [{ label: "Project" }, { label: "Other" }]
          },
          { label: "Open" },
          { label: "Quit" }
        ]
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          { label: "Delete", icon: "pi pi-fw pi-trash" },
          { label: "Refresh", icon: "pi pi-fw pi-refresh" }
        ]
      }
    ];
  }
}
