import { IPlace } from "../models/places";
import { app } from "../helpers/firebase";
export type TPlaceActions =
  | { type: "SET_PLACES_LOADING"; payload: boolean }
  | { type: "SET_PLACE_DETAIL"; payload: IPlace | null }
  | { type: "SET_PLACES_LIST"; payload: IPlace[] };

export const getPlaces = () => {
  const placesRef = app.firestore().collection("places");
  return placesRef
    .limit(10)
    .orderBy("lastModified", "desc")
    .get()
    .then(({ docs }) => docs.map((d) => d.data()));
};

export const getPlacesAfter = (place: any) => {
  const placesRef = app.firestore().collection("places");
  return placesRef
    .limit(10)
    .orderBy("lastModified", "desc")
    .startAfter(place)
    .get();
};
