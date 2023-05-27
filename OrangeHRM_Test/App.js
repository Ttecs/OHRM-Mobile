import React from 'react';
import NavContainer from './src/views/navigators/NavContainer';

import {Provider} from 'react-redux';
import configureStore from './src/store/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
};

export default App;
