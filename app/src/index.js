import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";


import store from "./redux/store";


import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f34748", //this overide blue color
      light: "#ddd", //overides light blue
      dark: "#333", //overides dark blue color
    },
  },
});

let persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}> 
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
