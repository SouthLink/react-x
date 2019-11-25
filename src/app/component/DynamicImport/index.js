
const importRoute = (route) => {
    if (typeof route.component != 'string') {
        return route
    }

    const path = route.component.replace('@/app/', '..');
    router.component = require('@/app/' + path).default;

    return route
}

const dynamicImport = (routes = []) => {
    routes.forEach(route => {
        route.strict = false;
        if (route.children) {
            route.exact = false;
        }

        if (typeof route.component == 'string') {
            importRoute(route.children)
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