// App.js
import React from 'react';
import { Provider } from 'react-redux';``
import store from './Component/redux/store/Store';
import Login from './Component/screens/Login';
const App = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export default App;
