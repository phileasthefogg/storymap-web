import { TLocationActions } from "../actions/mapActions";
import { ILocation } from "../models/locations";

export interface IMapReducer {
  list: ILocation[];
  detail: ILocation | null;
  loading: boolean;
}

const initialState = {
  list: [],
  detail: null,
  loading: true,
};

const userReducer = (
  state: IMapReducer = initialState,
  action: TLocationActions
) => {
  switch (action.type) {
    case "SET_LOCATIONS_LOADING":
      return { ...state, loading: action.payload };
    case "SET_LOCATION_DETAIL":
      return { ...state, detail: action.payload };
    case "SET_LOCATIONS_LIST":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default userReducer;
