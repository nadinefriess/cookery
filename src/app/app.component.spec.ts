import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CommonModule } from "./common/common.module";
import { RecipeModule } from "./recipe/recipe.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RecipeModule, CommonModule]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
