import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";

import { AppComponent } from "./app.component";
import { CommonModule } from "./common/common.module";
import { RecipeModule } from "./recipe/recipe.module";

import { rootReducer, INITIAL_STATE, IAppState } from "./store";

@NgModule({
  declarations: [AppComponent],
  imports: [NgReduxModule, CommonModule, RecipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
