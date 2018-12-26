import { IRecipe } from "./recipe";

export interface IAppState {
  recipes: IRecipe[];
}
export const INITIAL_STATE: IAppState = {
  recipes: []
};

export function rootReducer(state, action) {
  return state;
}
