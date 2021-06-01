import { TMemorySlice } from "./memories";
export interface IPlace {
  name: string;
  imgUrl?: string;
  shortDesc?: string;
  longDesc?: string;
  established?: number;
  closed?: number;
  numMemories?: number;
  memorySlice?: TMemorySlice | null;
}

export interface IPlaceSlice {
  name: string;
  numMemories: number;
  imgUrl?: string;
  shortDesc?: string;
  established?: number;
  closed?: number;
}

export interface INewPlace {
  name: string;
  imgUrl?: string;
  shortDesc: string;
  longDesc: string;
  established?: number;
  closed?: number;
  photo?: any;
}
