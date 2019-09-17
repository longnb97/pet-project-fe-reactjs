import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Link, Prompt, Redirect } from "react-router-dom";
import './App.css';

const Test = lazy(() => import('./views/Test'));
const Contact = lazy(() => import('./views/Contact'));
const About = lazy(() => import('./views/About'));
const Component404 = lazy(() => import('./views/Component404'));

function App() {
  const loading = <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>

          <Route exact path="/test" component={Test} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/contact"
            render={props => <Contact {...props} extra={'extra'} />}
          />
        </Switch>
        <div>
          <div className="App">
            {window.location.pathname === '/' ? <Link to='/test'> <button>test</button></Link> : null}
          </div>
          {/* <Prompt when={true}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        /> */}
        </div>
        {/* force redirect */}
        {/* <Redirect to="/login" />   */}
        {/* <Route component={Component404} /> */}
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
