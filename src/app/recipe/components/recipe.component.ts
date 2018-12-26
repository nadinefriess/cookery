import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {
  public recipes$: Observable<object>;

  constructor(public recipeService: RecipeService) {}

  public ngOnInit() {
    this.recipes$ = this.recipeService.getRecipes();
  }
}
