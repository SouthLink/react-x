import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';


import { routes } from './config/routes';
import { isUseHashRouter } from './config/index';
const Router = isUseHashRouter ? HashRouter : BrowserRouter;

import Test from './test';

console.log(routes)
class App extends React.Component {
    render() {
        <Router>
            <Switch>
                {
                    routes.map((route, inx) => {
                        <Route
                            key={inx}
                            path={route.path}
                            exact={route.exact === undefined ? true : route.exact}
                            strict={route.strict === undefined ? false : route.strict}
                            render={(props) => {
                                console.log(route)
                            }}
                        >
                            
                        </Route>
                    })
                }
            </Switch>
        </Router>
    }
}




    // <Provider>
        // {/* <Routes /> */}
    // </Provider>,
ReactDOM.render(
    <div>
        <Test />
        <App />
        <span>12312</span>
    </div>,
    document.getElementById('root'),
)

if (module.hot) {
    // 实现热更新
    module.hot.accept();
}