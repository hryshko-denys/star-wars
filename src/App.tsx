import React, { FC } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
// import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { CategoriesList } from './components/CategoriesList/CategoriesList';

const App: FC = () => (
  <>
    <div className="App">
      <Header />
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route exact path="/home">
        <Redirect to="/" />
      </Route>
      <Route
        path="/categories/:title?"
        // render={({ match }) => <CategoriesList titleId={match.params.title} />}
        component={CategoriesList}
      />
      {/* <Route path="*" component={NotFoundPage} /> */}
    </Switch>
  </>
);

export default App;
