import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./dist/dashboard/Dashboard";

function App() { 

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;