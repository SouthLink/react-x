import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/app/App';
import Loadable from 'react-loadable';

const reactReader = (App) => {
    ReactDOM.render(
        <App />,
        document.getElementById('root'),
    )
}

Loadable.preloadReady().then(() => {
    reactReader(App)
})


if (module.hot) {
    // 实现热更新
    module.hot.accept();
}