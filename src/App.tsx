import CssBaseline from "@material-ui/core/CssBaseline";
import NoSsr from "@material-ui/core/NoSsr";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useThemeMode } from "./hooks/useThemeMode";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import { darkTheme } from "./theme/dark";
import { lightTheme } from "./theme/light";

const themeDict = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const themeMode = useThemeMode();
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={themeDict[themeMode]}>
          <ThemeProvider theme={themeDict[themeMode]}>
            <CssBaseline />
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <Route exact path="/todo">
                  <Todo />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Switch>
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
}

export default App;
