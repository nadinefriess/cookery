import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class RecipeService {
  public uri = "http://localhost:4000";
  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get(`${this.uri}/recipes`);
  }

  public getRecipeById(id: number) {
    return this.http.get(`${this.uri}/recipes/${id}`);
  }

  public addRecipe(recipe: any) {
    return this.http.post(`${this.uri}/recipes/add`, recipe);
  }

  public updateRecipe(recipe: any) {
    return this.http.delete(`${this.uri}/recipes/update/${recipe.id}`, recipe);
  }

  public deleteRecipe(recipe: any) {
    return this.http.delete(`${this.uri}/recipes/delete/${recipe.id}`);
  }
}
