/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import ErrorsPage from "./modules/ErrorsExamples/ErrorsPage";

export function Routes() {
  const [startGame,setStartGame]=useState(false);
  const [showComponent,setShowComponent] = useState(false);
  const [setting, setSetting] = useState([
    {
      numberOfArraySample: "",
      t: 1000,
      isi: 1000,
      n: 1,
      s: [
        3,
        8,
        2,
        2,
        2,
        5,
        5,
        1,
        7,
        5,
        2,
        3,
        9,
        4,
        1,
        6,
        4,
        4,
        4,
        4,
        3,
        3,
        1,
        4,
        1,
      ],
      mode: "demo",
    },
  ]);
  const [settingGonogo, setSettingGonogo] = useState([
    {
      numberOfArraySample: "",
      t: 1000,
      isi: 1000,
      target: "پ",
      s: [1, 1, 1, 100, 100, 2, 1, 0, 100, 2, 100, 2, 1, 2, 100],
      mode: "demo",
    },
  ]);
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  return (
    <Switch>
      {!isAuthorized ? (
        <>
          
          <Route>
            <AuthPage />
          </Route>
        </>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      <Route path="/error" component={ErrorsPage} />
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage startGame={startGame} setStartGame={setStartGame} showComponent={showComponent} setShowComponent={setShowComponent} setSetting={setSetting} setting={setting} settingGonogo={settingGonogo} setSettingGonogo={setSettingGonogo}  />
        </Layout>
      )}
    </Switch>
  );
}
