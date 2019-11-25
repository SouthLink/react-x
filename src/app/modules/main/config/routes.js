const base = '@/app/modules/main'
const MainPage = `${base}/MainPage`


export const routes = (childrens) => ([{
    path: `/`,
    component: MainPage,
    title: '首页',
    children: childrens
}])