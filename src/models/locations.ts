import { IPlace, IPlaceSlice } from "./places";

export interface ILocation {
  address?: IAddress;
  coordinate: { lat: number; lng: number };
  places: IPlace[];
  placesSlice: { [placeId: string]: IPlaceSlice };
}

export interface IAddress {
  st_name?: string;
  st_num?: string;
  zip?: string;
}
