import { combineReducers } from "redux";
import userReducer, { IUserReducer } from "./userReducer";
import placeReducer, { IPlaceReducer } from "./placeReducer";

export interface IStore {
  user: IUserReducer;
  places: IPlaceReducer;
}

const rootReducer = combineReducers({
  user: userReducer,
  places: placeReducer,
});

export const userSelector = (state: IStore) => state.user;
export const placesSelector = (state: IStore) => state.places;

export default rootReducer;
