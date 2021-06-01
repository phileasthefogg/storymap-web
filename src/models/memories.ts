export interface IMemory {
  authorId: string;
  authorName: string;
  title: string;
  date: string;
  body: string;
  placeId: string;
}

export interface INewMemory {
  title: string;
  body: string;
  photo: any | null;
}

export type TMemorySlice = IMemory[];
