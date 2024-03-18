import Admin from "./pages/Admin";
import ApplicationsForUser from "./pages/ApplicationsForUser";
import Auth from "./pages/Auth";
import FormApplication from "./pages/FormApplication";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProjectsForUser from "./pages/ProjectsForUser";
import Register from "./pages/Register";
import { ADMIN_ROUTE, APPLICATIONS_ROUTE, APPLICATION_FORM_ROUTE, AUTH_ROUTE, HOME_ROUTE, PROFILE_ROUTE, PROJECTS_ROUTE, REGISTER_ROUTE } from "./utils/consts";

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
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: PROJECTS_ROUTE,
        Component: ProjectsForUser
    },
    {
        path: APPLICATIONS_ROUTE,
        Component: ApplicationsForUser
    }
]