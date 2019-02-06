import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';

import '~/config/reactotron';

import Routes from '~/routes';
import { store, persistor } from '~/store';

import GlobalStyle from '~/styles/global';
import Snackbar from '~/components/Snackbar';

// persistor.purge();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<p>Loading</p>} persistor={persistor}>
      <CssBaseline />

      <GlobalStyle />
      <Snackbar />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
