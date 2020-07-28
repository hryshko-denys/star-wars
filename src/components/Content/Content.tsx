import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../api/api';
import { StarwarsTypes } from '../../interfaces';
import { Input } from '../Input/Input';
import { EntitiesList } from '../EntitiesList/EntitiesList';

import './Content.css';

export const Content: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [categoryContent, setCategoryContent] = useState<StarwarsTypes[]>([]);
  let { title } = useParams();

  const titleAdaptive = title && title.toLowerCase();

  if (currentTitle !== titleAdaptive) {
    setCurrentTitle(titleAdaptive)
  }

  const fetchData = async (titleToGet: string) => {
    setIsLoading(true)
    const peopleFromServer: StarwarsTypes[] = await getData(titleToGet);
    setCategoryContent(peopleFromServer);
    setIsLoading(false)
  }

  useEffect(() => {

    fetchData(currentTitle);

  }, [currentTitle]);

  return (
    <div className="content">
      <Input />
      <EntitiesList list={categoryContent} isLoading={isLoading} />
    </div>
  );
} 