import { NgModule } from "@angular/core";
import { RecipeComponent } from "./components/recipe.component";
import { RecipeService } from "./services/recipe.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [RecipeComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [RecipeComponent],
  providers: [RecipeService]
})
export class RecipeModule {}
