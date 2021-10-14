import { api } from '../api';

interface QueryKeyData {
  pageParam?: number;
  queryKey: [
    offset?: number,
    nameStartsWith?: string,
    orderBy?: 'name' | '-name',
  ]
}

export const fetchCharacters = async (
  { pageParam = 0, queryKey }: QueryKeyData) => {

  const [offset, nameStartsWith, orderBy] = queryKey;

  const params = Object.assign(
    { offset: pageParam },
    nameStartsWith && { nameStartsWith },
    orderBy && { orderBy }
  );

  const { data } = await api.get(`/characters`, { params });

  /* 
  offset (int, optional): The requested offset (number of skipped results) of the call.,
  limit (int, optional): The requested result limit.,
  total (int, optional): The total number of resources available given the current filter set.,
  count (int, optional): The total number of results returned by this call.,
  results (Array[Character], optional): The list of characters returned by the call.
  */
  const { total, count, results, limit, offset: dataOffset } = data.data;
  console.log(count);

  const parcial: number = count + dataOffset * limit;
  const nextOffset: number = dataOffset + limit;
  const lastPage: boolean = parcial >= total;

  // console.log({ total, count, results, limit, offset, nextOffset, lastPage })
  return { total, count, results, limit, offset: pageParam, nextOffset, lastPage };
}