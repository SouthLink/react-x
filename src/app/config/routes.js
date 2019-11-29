// 待添加错误页面

import { routes as mainImport , LoginPage, Page404 } from '@/app/modules/main';
import { routes as system } from '@/app/modules/system';

import { withDynamicImport } from '@/app/component/DynamicImport/index';

// 所有路由子模块都到这里统一管理、注入
const mainChildren = [
    ...system()
];

// 以main作为主入口
const mainRoutes = mainImport(mainChildren);

const routes = [{
        path: '/login',
        component: LoginPage,
        title: '登录'
    },{
        path: '/404',
        component: Page404,
        title: '你似乎来到了无人的荒野'
    },
    ...mainRoutes
]

console.log(withDynamicImport(routes))

export default withDynamicImport(routes);