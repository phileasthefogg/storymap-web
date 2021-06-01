import { combineReducers } from "redux";
import userReducer, { IUserReducer } from "./userReducer";
import placeReducer, { IPlaceReducer } from "./placeReducer";
import mapReducer, { IMapReducer } from "./mapReducer";

export interface IStore {
  user: IUserReducer;
  places: IPlaceReducer;
  map: IMapReducer;
}

const rootReducer = combineReducers({
  user: userReducer,
  places: placeReducer,
  map: mapReducer,
});

export const userSelector = (state: IStore) => state.user;
export const placesSelector = (state: IStore) => state.places;
export const mapSelector = (state: IStore) => state.map;

export default rootReducer;
