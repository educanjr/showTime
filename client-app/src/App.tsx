import React from 'react';
import HomePage from './features/pages/Home/Home.page';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import ShowPage from './features/pages/Show/Show.page';
import TopNav from './features/Nav/TopNav/TopNav';
import { Container } from 'semantic-ui-react';
import NotFoundPage from './features/pages/NotFound/NotFound.page';
import ShowsPage from './features/pages/Shows/Shows.page';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route
          path={'/(.+)'}
          render={() => (
            <>
              <TopNav />
              <Container className='body-container'>
                <Switch>
                  <Route exact path='/shows/:id' component={ShowPage} />
                  <Route exact path='/shows' component={ShowsPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </Container>
            </>
          )} />
    </Switch>
  );
}

export default App;
