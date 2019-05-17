import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RecipeService } from "../services/recipe.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  public recipes$: Observable<object>;

  constructor(public recipeService: RecipeService, public router: Router) {}

  public ngOnInit() {
    this.recipes$ = this.recipeService.getRecipes();
  }

  public showRecipe(recipeId: number) {
    this.router.navigate(["/recipe/", recipeId]);
  }
}
