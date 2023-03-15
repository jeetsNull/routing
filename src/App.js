import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Layout from "./Layout"
import "react-bootstrap-v5"

// const defaultHistory = createBrowserHistory();

const App = () => {
  return (
    <>
      {/* <Router history={defaultHistory}> */}
      <Router >
        <Suspense fallback={<div className="spinner-container"></div>}>
          <Routes>
            <Route path="/*" exact element={<Layout />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
