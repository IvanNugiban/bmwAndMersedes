import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';
import {Provider} from "react-redux";
import store from "./redux/store";
import GlobalStyles from "./styles/global"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
    <React.StrictMode>
<GlobalStyles/>
        <App/>
    </React.StrictMode>
    </Provider>
);

