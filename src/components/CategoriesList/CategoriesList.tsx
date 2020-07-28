import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { uuid } from 'uuidv4';
import { categoriesData } from './CategoriesListData';
import { Content } from '../Content/Content';

export const CategoriesList: FC = () => (
  <>
  <header className="center">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          {categoriesData.map(category => (
          <li className="nav-item" key={uuid()}>
            <NavLink 
              className="nav-link" 
              to={`/categories/${category.title}`} 
              exact
            > 
              {category.title} 
            </NavLink>
          </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
  <Content />
  </>
);
