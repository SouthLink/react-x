// 动态路由 错误页面404



import { routes as main } from '@/app/modules/main/index';
import { routes as system } from '@/app/modules/system/index';

const mainChildren = [
    ...system()
];
const mainRoutes = main(mainChildren);

const routes = [{
    
},{
    
},{
    
}]