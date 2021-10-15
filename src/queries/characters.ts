import { CharacterItemData, CharacterResponseData } from '../@types';
import { api } from '../api';

// type QueryKeyData = {
//   pageParam?: number;
//   queryKey: [
//     offset?: number,
//     nameStartsWith?: string,
//     orderBy?: string,
//   ]
// }

type QueryKeyData = [
  offset: number,
  nameStartsWith: string,
  orderBy: string,
]


type CharactersQueryResponseData = {
  total: number;
  count: number;
  results: CharacterItemData[];
  limit: number;
  offset: number;
  nextOffset: number;
  lastPage: boolean;
}



export async function fetchCharacters(queryKey: any): Promise<CharactersQueryResponseData> {


  // queryKey type inferred here to avoid react-query type error:
  const [offset, nameStartsWith, orderBy] = queryKey as QueryKeyData;

  console.log({ offset, nameStartsWith, orderBy });

  const params = Object.assign(
    { offset },
    nameStartsWith && { nameStartsWith },
    orderBy && { orderBy }
  );

  const { data } = await api.get<CharacterResponseData>(`/characters`, { params });

  /* 
  offset (int, optional): The requested offset (number of skipped results) of the call.,
  limit (int, optional): The requested result limit.,
  total (int, optional): The total number of resources available given the current filter set.,
  count (int, optional): The total number of results returned by this call.,
  results (Array[Character], optional): The list of characters returned by the call.
  */
  const { total, count, results, limit, offset: dataOffset } = data.data;

  const parcial: number = count + dataOffset * limit;
  const nextOffset: number = dataOffset + limit;
  const lastPage: boolean = parcial >= total;

  return { total, count, results, limit, offset, nextOffset, lastPage };
}