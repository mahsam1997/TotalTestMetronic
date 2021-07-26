import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import ButtonGonogoTest from "../_metronic/layout/components/MyPage/gonogo-test/test.component";
import ButtonNbackTest from "../_metronic/layout/components/MyPage/nback-test/test.component";
import StropTest from "../_metronic/layout/components/MyPage/strop-test/Strop/testbutton.component";
import SetDataStrop from "../_metronic/layout/components/MyPage/strop-test/SetDataStrop/SetDataStrop.component";
import CptTest from "../_metronic/layout/components/MyPage/cpt-test/cpt/button.component";
import NbackTest from "../_metronic/layout/components/MyPage/nback-test/starttest.component";
// import CPT from "../_metronic/layout/components/MyPage/cpt-test/cpt/CPT.component"
const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage(props) {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/testN-back">
          <ButtonNbackTest
            startGame={props.startGame}
            setStartGame={props.setStartGame}
            showComponent={props.showComponent}
            setShowComponent={props.setShowComponent}
            setSetting={props.setSetting}
            setting={props.setting}
          />
        </Route>
        <Route path="/testgo-no-go">
          <ButtonGonogoTest
            startGame={props.startGame}
            setStartGame={props.setStartGame}
            showComponent={props.showComponent}
            setShowComponent={props.setShowComponent}
            setSettingGonogo={props.setSettingGonogo}
            settingGonogo ={props.settingGonogo}
          />
        </Route>
        <Route path="/test-cpt">
          <CptTest />
        </Route>
        <Route path="/starttest-strop">
          <SetDataStrop />
        </Route>
        <Route path="/test-strop">
          <StropTest />
        </Route>
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
