import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { StarwarsTypes } from '../../interfaces';
import { uuid } from 'uuidv4';

// import './EntityInfo.css';

interface EntityInfoProps {
  list: StarwarsTypes[];
}

interface MatchParams {
  title: string;
  entity: string;
}

export const EntityInfo: FC<EntityInfoProps> = ({ list }) => {
  const currentCategory = useParams<MatchParams>().title;
  const currentEntity = useParams<MatchParams>().entity;

  console.log(currentCategory, currentEntity)

  return (
    <div className="entity__info">
      <ul className="entity__list">
      {list.map(entity => {
        switch (currentCategory) {
          case 'People':
            return (
              <li key={uuid()}>
                  {`Birth year: ${entity.birth_year}`}
              </li>
            )
          // case 'Species':
          // case 'Planets':
          // case 'Starships':
          // case 'Vehicles':
          //   return list
          //     .sort(
          //       (entityA, entityB) => entityA.name.localeCompare(entityB.name),
          //     );
          // case 'Films':
          //   return list
          //   .sort(
          //     (entityA, entityB) => entityA.title.localeCompare(entityB.title),
          //   );
          default:
            return (
              <li key={uuid()}>
                {`Birth year: ${entity.birth_year}`}
              </li>
            );
          }
      })}

      </ul>

    </div>
  );
} 