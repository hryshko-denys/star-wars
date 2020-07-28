import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { StarwarsTypes, StarwarsEntitiesInterface } from '../../interfaces';
import { uuid } from 'uuidv4';
import { 
  peopleEntity, 
  filmEntity, 
  planetsEntity,
  speciesEntity,
  vehicleEntity,
  starshipEntity
} from './EntityInfoData';

import './EntityInfo.css';

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

  const entityToShow = list.find(entity => {
    const nameForRoute = entity.name && entity.name.replace(/\s/g, '-');
    const titleForRoute = entity.title && entity.title.replace(/\s/g, '-');
    return currentEntity === nameForRoute || currentEntity === titleForRoute;
})

  return (
    <div className="entity__info">
      {entityToShow && 
      <h2 className="entity__heading">
        {entityToShow.name || entityToShow.title}
      </h2>}
      <ul className="entity__list">
      {currentEntity && list.map(entity => {
        const nameForRoute = entity.name && entity.name.replace(/\s/g, '-');
        const titleForRoute = entity.title && entity.title.replace(/\s/g, '-');

        if (currentEntity === nameForRoute || currentEntity === titleForRoute) {
          let EntitiesToShow: StarwarsEntitiesInterface[] = [];
          switch (currentCategory) {
            case 'People':
              EntitiesToShow = peopleEntity;
              break;
            case 'Films':
              EntitiesToShow = filmEntity;
              break;
            case 'Planets':
              EntitiesToShow = planetsEntity;
              break;
            case 'Species':
              EntitiesToShow = speciesEntity;
              break;
            case 'Vehicles':
              EntitiesToShow = vehicleEntity;
              break;
            default:
              EntitiesToShow = starshipEntity; // for Starship
            }
            

            return EntitiesToShow.map(person => {
              return (
                <li
                  key={uuid()}
                  className="entity__item"
                >
                    <span className="entity__title">{`${person.title}:`}</span>
                    <span className="entity__value">{`${entity[person.field]}`}</span> 
                </li>
              )
            }); // I know it could be better, but I didn't have time for refactoring
          }})}
      </ul>
    </div>
  );
} 