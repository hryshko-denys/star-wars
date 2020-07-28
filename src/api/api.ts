export const getData = async <T>( type: string ): Promise<T[]> => {
  const currentList = [];
  let currentPage = 1;
  let nextPage = 'exists';

  if (type) {
    while(nextPage) {
      const response2 = await fetch(`https://swapi.dev/api/${type}/?page=${currentPage}`).then(respond => respond.json());
      currentList.push(...response2.results)
      currentPage++;
      nextPage = response2.next;
    }
  }


  return currentList;
};