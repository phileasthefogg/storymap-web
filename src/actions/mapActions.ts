import { ILocation } from "../models/locations";
import { app } from "../helpers/firebase";
import { Dispatch } from "react";
export type TLocationActions =
  | { type: "SET_LOCATIONS_LOADING"; payload: boolean }
  | { type: "SET_LOCATION_DETAIL"; payload: ILocation | null }
  | { type: "SET_LOCATIONS_LIST"; payload: ILocation[] };

export const getLocations = () => {
  const locationsRef = app.firestore().collection("locations");
  return (dispatch: Dispatch<TLocationActions>) => {
    dispatch({ type: "SET_LOCATIONS_LOADING", payload: true });
    locationsRef
      .limit(10)
      .orderBy("lastModified", "desc")
      .get()
      .then(({ docs }) => {
        dispatch({
          type: "SET_LOCATIONS_LIST",
          payload: docs.map((d) => d.data() as ILocation),
        });
        dispatch({ type: "SET_LOCATIONS_LOADING", payload: false });
      });
  };
};

export const getLocationsAfter = (location: any) => {
  const locationsRef = app.firestore().collection("locations");
  return locationsRef
    .limit(10)
    .orderBy("lastModified", "desc")
    .startAfter(location)
    .get();
};
