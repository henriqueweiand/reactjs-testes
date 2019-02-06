import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Main from '~/pages/Main';
import Lesson from '~/pages/Lesson';
import LessonComplete from '~/pages/LessonComplete';
import Singup from '~/pages/Auth/Singup';
import Singin from '~/pages/Auth/Singin';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/singin" component={Singin} />
      <Guest path="/singup" component={Singup} />
      <Private path="/" exact component={Main} />
      <Private path="/lesson/complete" exact component={LessonComplete} />
      <Private path="/lesson/:id" component={Lesson} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
