const base = '@/app/modules/system'

import SysManagePage from '@/app/modules/system/page/sysManage/index';
import UserManagePage from '@/app/modules/system/page/userManage/index';

export default () => ([{
    path: `/system-manage`,
    component: SysManagePage,
    title: '系统管理'
},{
    path: `/user-manage`,
    component: UserManagePage,
    title: '用户管理'
}])