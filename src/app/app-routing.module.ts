import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  RecipeComponent,
  RecipeAddComponent,
  RecipesComponent
} from "./recipe";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  },
  {
    path: "recipes",
    component: RecipesComponent
  },
  {
    path: "recipes/add",
    component: RecipeAddComponent
  },
  {
    path: "recipe/:id",
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutintModule {}

export const routingComponents = [
  RecipesComponent,
  RecipeComponent,
  RecipeAddComponent
];
