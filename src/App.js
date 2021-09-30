import React, { memo , Suspense} from "react";
import { renderRoutes } from "react-router-config";

import routes from "./router";

import CAAppHeader from "@/components/app-header";
import CAAppFooter from "@/components/app-footer";

import store from "./store";
import { Provider } from "react-redux";

import { HashRouter } from "react-router-dom";

import PlayerBar from "./pages/player/app-player-bar";
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <CAAppHeader />

        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <CAAppFooter />
        <PlayerBar />
      </HashRouter>
    </Provider>
  );
});
