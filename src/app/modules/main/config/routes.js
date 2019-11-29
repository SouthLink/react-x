const base = '@/app/modules/main';
const MainPage = `${base}/page/MainPage/index`;

export const LoginPage = `${base}/page/Login/index`;
export const Page404 = `${base}/page/404/index`;

export const routes = (childrens) => ([{
    path: `/`,
    component: MainPage,
    title: '首页',
    children: childrens
}])