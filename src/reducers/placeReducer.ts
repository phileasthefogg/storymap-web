import { TPlaceActions } from "../actions/placeActions";
import { IPlace } from "../models/places";

export interface IPlaceReducer {
  list: IPlace[];
  detail: IPlace | null;
  loading: boolean;
}

const initialState = {
  list: [],
  detail: null,
  loading: true,
};

const userReducer = (
  state: IPlaceReducer = initialState,
  action: TPlaceActions
) => {
  switch (action.type) {
    case "SET_PLACES_LOADING":
      return { ...state, loading: action.payload };
    case "SET_PLACE_DETAIL":
      return { ...state, detail: action.payload };
    case "SET_PLACES_LIST":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default userReducer;
