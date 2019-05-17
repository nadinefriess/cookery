import { NgModule } from "@angular/core";
import { NgRedux, NgReduxModule } from "@angular-redux/store";

import { AppComponent } from "./app.component";
import { CommonModule } from "./common/common.module";

import { rootReducer, INITIAL_STATE, IAppState } from "./store";
import { AppRoutintModule, routingComponents } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipeModule } from "./recipe/recipe.module";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    NgReduxModule,
    CommonModule,
    BrowserModule,
    AppRoutintModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
