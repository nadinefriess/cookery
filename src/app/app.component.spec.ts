import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from "./components/recipes/recipes.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, RecipesComponent]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.headerConfig.title).toEqual("Recipes");
  }));
});
