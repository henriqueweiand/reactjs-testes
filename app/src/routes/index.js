import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import Singup from '~/pages/Auth/Singup';
import Singin from '~/pages/Auth/Singin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/singin" component={Singin} />
      <Route path="/singup" component={Singup} />
      <Route path="/main" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
