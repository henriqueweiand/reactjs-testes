import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
