export enum Status {
  SUCCESS = 'success',
  LOADING = 'loading',
  ERROR = 'error',
}

export type SearchWordArgs = {
  searchValue: string;
};

export type LicenseItem = {
  url?: string;
  name?: string;
};
export type PhoneticsItem = {
  text?: string;
  audio?: string;
  license?: LicenseItem;
  sourceUrl: string;
};
export type DefinitionsItem = {
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
  definition?: string;
};
export type MeaningsItem = {
  definitions: DefinitionsItem[];
  partOfSpeech: string;
  synonyms?: string[];
  antonyms?: string[];
};

export type WordItem = {
  word?: string;
  sourceUrls?: string[];
  phonetic?: string;
  phonetics?: PhoneticsItem[];
  meanings?: MeaningsItem[];
  license: LicenseItem;
};

export interface SearchSliceState {
  searchValue: string;
  status: string;
  words: WordItem[];
}

export type SourceItemProps = {
  sourceUrls: string[];
  license: LicenseItem;
};

export type PhoneticsItemProps = {
  phonetics?: PhoneticsItem[];
};
