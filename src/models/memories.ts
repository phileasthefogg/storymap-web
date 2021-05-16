export interface IMemory {
  authorId: string;
  authorName: string;
  title: string;
  date: string;
  body: string;
  placeId: string;
}

export type TMemorySlice = IMemory[];
