import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./steps/app";
import { Provider } from "react-redux";
import { store } from './steps/store';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App></App>
        </Provider>
    </StrictMode>
)
