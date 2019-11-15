const base = '@/app/modules/main'
const MainPage = `${base}/MainPage`


export default (childrens) => ([{
    path: `/`,
    component: SysManagePage,
    title: '首页',
    children: childrens
}])