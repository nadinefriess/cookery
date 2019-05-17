import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-recipe-add",
  templateUrl: "./recipe-add.component.html",
  styleUrls: ["./recipe-add.component.scss"]
})
export class RecipeAddComponent {
  public recipeForm: FormGroup;

  constructor(public recipeService: RecipeService) {
    this.recipeForm = new FormGroup({
      recipeTitle: new FormControl(""),
      recipeDescription: new FormControl("")
    });
  }

  public addRecipe(recipe) {
    this.recipeService.addRecipe(recipe);
  }
}
