import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import FormApplication from "./pages/FormApplication";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { ADMIN_ROUTE, APPLICATION_FORM_ROUTE, AUTH_ROUTE, HOME_ROUTE, REGISTER_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },

]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    },
    {
        path: APPLICATION_FORM_ROUTE,
        Component: FormApplication
    }
]