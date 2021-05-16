import { TMemorySlice } from "./memories";
export interface IPlace {
  name: string;
  imgUrl?: string;
  shortDesc?: string;
  longDesc?: string;
  established?: number;
  closed?: number;
  numMemories: number;
  memorySlice: TMemorySlice | null;
}
