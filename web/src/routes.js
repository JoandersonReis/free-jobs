import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomeSceen from "./pages/HomeScreen"
import ProfileScreen from "./pages/ProfileScreen"
import RegisterScreen from "./pages/RegisterScreen"
import NewJobScreen from "./pages/NewJobScreen"
import EditJobScreen from "./pages/EditJobScreen"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeSceen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/org/new" component={RegisterScreen} />
        <Route path="/job/new" component={NewJobScreen} />
        <Route path="/job/edit" component={EditJobScreen} />
      </Switch>
    </BrowserRouter>
  )
}
