import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';


import { default as routes } from './config/routes';
import { isUseHashRouter } from './config/index';
const Router = isUseHashRouter ? HashRouter : BrowserRouter;

import Test from './test';
   

class App extends React.Component {
    
    render() {

        return(
            <Router>
                <Switch>
                    {
                        routes.map((route, inx) => (
                            <Route
                                key={inx}
                                path={route.path}
                                exact={route.exact === undefined ? true : route.exact}
                                strict={route.strict === undefined ? false : route.strict}
                                render={(props) => {

                                    const { component: Component, title: pageTitle } = route;

                                    console.log(route)

                                    return (
                                        <Component />
                                    )
                                }}
                            />
                        ))
                    }
                </Switch>
            </Router>
        )
    }
}

export default App;