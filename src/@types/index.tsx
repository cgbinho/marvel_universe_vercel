
export type CharacterThumbnailData = {
  path: string;
  extension: string;
}

export type LastSeenData = {
  available: number;
  collectionURI: string;
  items: {
    resourceURI: string;
    name: string;
    type?: string;
  }[];
  returned: number;
}

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
}

export interface CharacterResponseData {
  data: ResponsePageData
}
