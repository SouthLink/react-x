import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';

const Context = React.createContext([]);
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

class SubRouter extends Component {

    render() {

        return(
            <Consumer>
                {
                    routes => {

                    }
                }
            </Consumer>
        )
    }
}

export default SubRouter;