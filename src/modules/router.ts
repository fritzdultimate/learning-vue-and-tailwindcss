import HOME_ROUTES from './home/routes';
import LOGIN_ROUTES from './auth/login/routes';
const routes = [
    ...HOME_ROUTES,
    ...LOGIN_ROUTES
]

export default routes;