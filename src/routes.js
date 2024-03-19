import Admin from "./pages/Admin";
import ApplicationsForForeman from "./pages/ApplicationsForForeman";
import ApplicationsForUser from "./pages/ApplicationsForUser";
import Auth from "./pages/Auth";
import FormApplication from "./pages/FormApplication";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import ProjectManagment from "./pages/ProjectManagment";
import ProjectsForUser from "./pages/ProjectsForUser";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { ADMIN_ROUTE, APPLICATIONS_AVAILABLE_ROUTE, APPLICATIONS_ROUTE, APPLICATION_FORM_ROUTE, AUTH_ROUTE, HOME_ROUTE, PROFILE_ROUTE, PROJECTS_ROUTE, PROJECT_MANAGMENT_ROUTE, PROJECT_ROUTE, REGISTER_ROUTE, USERS_ROUTE } from "./utils/consts";

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
    },
    {
        path: USERS_ROUTE,
        Component: Users
    },
    {
        path: PROJECT_ROUTE,
        Component: Project
    },
    {
        path: APPLICATIONS_AVAILABLE_ROUTE,
        Component: ApplicationsForForeman
    },
    {
        path: PROJECT_MANAGMENT_ROUTE,
        Component: ProjectManagment
    },
]