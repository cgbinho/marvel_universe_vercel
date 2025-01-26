export type CharacterThumbnailData = {
  path: string;
  extension: string;
};

export type LastSeenData = {
  available: string;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type?: string;
  }[];
  returned: string;
};

export interface CharacterItemData {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: CharacterThumbnailData;
  resourceURI: string;
  comics: LastSeenData;
  series: LastSeenData;
  stories: LastSeenData;
  events: LastSeenData;
  urls: {
    type: string;
    url: string;
  }[];
}

export type ResponsePageData = {
  count: number;
  limit: number;
  offset: number;
  results: CharacterItemData[];
  total: number;
};

export interface CharacterResponseData {
  data: ResponsePageData;
}

export type ComicList = {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: ComicSummary[];
};

export type SeriesList = {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: SeriesSummary[];
};

export type StoryList = {
  available?: string;
  returned?: string;
  collectionURI?: string;
  items?: StorySummary[];
};

export type ComicSummary = {
  resourceURI?: string;
  name?: string;
};

export type SeriesSummary = {
  resourceURI?: string;
  name?: string;
};

export type StorySummary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};
