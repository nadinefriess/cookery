import { NgModule } from "@angular/core";
import { RecipesComponent } from "./components/recipes.component";
import { RecipeService } from "./services/recipe.service";
import { BrowserModule } from "@angular/platform-browser";
import { RecipeComponent } from "./components/recipe.component";
import { RecipeAddComponent } from "./components/recipe-add.component";

@NgModule({
  declarations: [RecipesComponent, RecipeComponent, RecipeAddComponent],
  imports: [BrowserModule],
  providers: [RecipeService]
})
export class RecipeModule {}
