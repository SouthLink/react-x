// 动态路由 错误页面404

import { routes as mainImport } from '@/app/modules/main';
import { routes as system } from '@/app/modules/system';

import { withDynamicImport } from '@/app/component/DynamicImport/index';

const mainChildren = [
    ...system()
];

// 以main作为主入口
const mainRoutes = mainImport(mainChildren);

const routes = [{
        path: '/login',
    },{
        path: '/404',
    },
    ...mainRoutes
]

console.log(withDynamicImport(routes))

export default withDynamicImport(routes);