import React, { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { categoriesData } from './CategoriesListData';
import { getData } from '../../api/api';
import { People } from '../../interfaces';
// import './CategoriesList.css';

// interface CategoriesListProps {
//   titleId: string;
// }

export const CategoriesList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>('');
  const [categoryContent, setCategoryContent] = useState<People[]>([]);
  let { title } = useParams();

  const titleAdaptive = title && title.toLowerCase();

  if (currentTitle !== titleAdaptive) {
    setCurrentTitle(titleAdaptive)
  }

  const fetchData = async (titleToGet: string) => {
    setIsLoading(true)
    const peopleFromServer: People[] = await getData(titleToGet);
    setCategoryContent(peopleFromServer);
    setIsLoading(false)
  }

  useEffect(() => {

    fetchData(currentTitle);

  }, [currentTitle]);

  console.log(categoryContent)

  return (
    <>
    <header className="center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            {categoriesData.map(category => (
            <li className="nav-item" key={uuid()}>
              <NavLink className="nav-link" to={`/categories/${category.title}`} exact> {category.title} </NavLink>
            </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
      <div className="content">
        {isLoading && <h1>hello</h1>}
        {categoryContent.length !== 0 && 
          categoryContent.map(item => (
          <li key={item.name || item.title}>
            {item.name || item.title}
          </li>
        ))}
      </div>
    </>
  );
} 