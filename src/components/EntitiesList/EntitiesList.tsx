import React, { FC } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { StarwarsTypes } from '../../interfaces';
import { filterList, sortList, reverseList } from './ListToShow';
import loading from '../../images/loading.jpg';
import { EntityInfo } from '../EntityInfo/EntityInfo'

import './EntitiesList.css';

interface EntitiesListProps {
  list: StarwarsTypes[];
  isLoading: boolean;
}

interface MatchParams {
  title: string;
}

export const EntitiesList: FC<EntitiesListProps> = ({ list, isLoading }) => {
  const currentPath = useParams<MatchParams>().title;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryFilter = searchParams.get('query') || '';
  const querySortOrder = searchParams.get('sortOrder') || '';

  const filteredList = filterList(list, queryFilter, currentPath);
  const sortedList = sortList(filteredList, querySortOrder, currentPath)
  const reversedList = reverseList(sortedList, querySortOrder)
  console.log(filteredList)

  return (
    <div className="entities">
      {isLoading && 
        <div className="entities__image-wrapper">
          <img 
            className="entities__image"
            src={loading} 
            alt="loading" 
          />
        </div>
      }
      <h2 className="entities__heading">Please, choose one to get more information</h2>
      {list.length !== 0 && (
        <ul className="entities__list">
          {reversedList.map(item => {
            const nameForRoute = item.name && item.name.replace(/\s/g, '-');
            const titleForRoute = item.title && item.title.replace(/\s/g, '-');
            return (
              <li 
                key={item.name || item.title}
                className="entities__item"
              >
                <Link 
                  className="entities__link"
                  to={`/categories/${currentPath}/${nameForRoute || titleForRoute}`}
                >
                  {item.name || item.title}
                </Link>
              </li>
            )
          } )}
        </ul>
        )}
        <EntityInfo list={list} />
    </div>
  );
} 