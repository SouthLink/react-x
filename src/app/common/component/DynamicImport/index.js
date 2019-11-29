
const importRoute = (route) => {
    console.log(route)
    if (typeof route.component != 'string') {
        return route
    }

    const path = route.component.replace('@/app/', '');
    route.component = require('@/app/' + path).default;

    return route
}

const dynamicImport = (routes = []) => {
    routes.forEach(route => {
        route.strict = false;
        if (route.children) {
            route.exact = false;
        }

        if (typeof route.component == 'string') {
            importRoute(route)
        }

        if (route.children) {
            dynamicImport(route.children)
        }

    })
}

export const withDynamicImport = (routes) => {
    const routesClone = [...routes];
    dynamicImport(routesClone);
    return routesClone;
}