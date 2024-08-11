export type InputTag = string;
export interface UseTagInput {
  tags: InputTag[];
  addTags: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  removeTags: (index: number) => void;
}
