import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import ReduxToaster from 'react-redux-toastr';

import store from './store';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <ReduxToaster />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
