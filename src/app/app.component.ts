import { Component } from "@angular/core";
import { of } from "rxjs/Observable/of";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  headerConfig = {
    title: "Recipes"
  };
  recipes$ = of([
    "recipe 1",
    "recipe 2",
    "recipe 3",
    "recipe 4",
    "recipe 5",
    "recipe 6",
    "recipe 7",
    "recipe 8",
    "recipe 9",
    "recipe 9",
    "recipe 10"
  ]);

  public addRecipe() {
    // TODO: implement add functionality
  }

  public deleteRecipe() {
    // TODO: implement delete functionality
  }
}
