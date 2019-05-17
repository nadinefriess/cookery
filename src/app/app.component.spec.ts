import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CommonModule } from "./common/common.module";
import { RouterTestingModule } from "@angular/router/testing";
import {
  RecipesComponent,
  RecipeAddComponent,
  RecipeComponent
} from "./recipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipesComponent,
        RecipeAddComponent,
        RecipeComponent
      ],
      imports: [CommonModule, RouterTestingModule]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
