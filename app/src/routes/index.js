import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Main from '~/pages/Main';
import Singup from '~/pages/Auth/Singup';
import Singin from '~/pages/Auth/Singin';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/singin" component={Singin} />
      <Guest path="/singup" component={Singup} />
      <Private path="/main" exact component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
