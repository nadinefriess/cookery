import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.compoent.html",
  styleUrls: ["./recipe.compoent.scss"]
})
export class RecipeComponent implements OnInit, OnDestroy {
  public recipe$: Observable<any>;
  public subscription: Subscription;

  constructor(
    public recipeService: RecipeService,
    public router: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.subscription = this.router.paramMap.subscribe(params => {
      // (+) before `params.get()` turns the string into a number
      const id = params.get("id");
      this.recipe$ = this.recipeService.getRecipeById(id);
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
