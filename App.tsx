import React from 'react';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/redux/Store';

/** Корневой элемент приложения. */
const App = (): JSX.Element => (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
);

export default App;
