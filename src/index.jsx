import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './store/store';

const { store, persistor } = initStore();

ReactDOM.render(
    <Provider store={ store }>
         <PersistGate loading={ null } persistor={ persistor }>
            <ConnectedRouter history={history}>
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
                </ConnectedRouter>
        </PersistGate>
   </Provider>,
   document.getElementById('root'),
);