import React, { lazy, Suspense } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import PageNotFound from './PageNotFound/PageNotFound';

const AsyncHome = lazy(() => import('./Home/Home'));
const AsyngAbout = lazy(() => import('./About/About'));
const AsyncPets = lazy(() => import('./Pets/Pets'));
const AsyncPet = lazy(() => import('./Pet/Pet'));

const App = () => (
  <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={AsyncHome} />
          <Route exact path="/pets" component={AsyncPets} />
          <Route path="/about" component={AsyngAbout} />
          <Route
            path="/pets/:id"
            render={props => (
              <div>
                {console.log(props)}
                <AsyncPet {...props} />
              </div>
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default App;
