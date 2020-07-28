import { StarwarsTypes } from '../../interfaces';

export function filterList(people: StarwarsTypes[], query: string, path: string) {
  const pattern = new RegExp(`${query}`, 'gi');

  switch (path) {
    case 'People':
    case 'Species':
    case 'Planets':
      return people.filter(entity => pattern.test(entity.name));
    case 'Films':
      return people.filter(entity => pattern.test(entity.title));
    case 'Starships':
    case 'Vehicles':
      return people.filter(entity => pattern.test(entity.name) || pattern.test(entity.model));
    default:
      return people;
  }
}

export function sortList(list: StarwarsTypes[], querySortOrder: string, path: string) {
  if (querySortOrder === 'sorted') {
    switch (path) {
      case 'People':
      case 'Species':
      case 'Planets':
      case 'Starships':
      case 'Vehicles':
        return list
          .sort(
            (entityA, entityB) => entityA.name.localeCompare(entityB.name),
          );
      case 'Films':
        return list
        .sort(
          (entityA, entityB) => entityA.title.localeCompare(entityB.title),
        );
      default:
        return list;
    }
  }

    return list;
}

export function reverseList(sortedList: StarwarsTypes[], querySortOrder: string) {
  if (querySortOrder === 'reverse') {
    return sortedList.reverse();
  }

  return sortedList;
}
