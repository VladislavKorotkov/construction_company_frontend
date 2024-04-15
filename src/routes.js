import { Form } from "react-router-dom";
import Admin from "./pages/Admin";
import ApplicationsForForeman from "./pages/ApplicationsForForeman";
import ApplicationsForUser from "./pages/ApplicationsForUser";
import Auth from "./pages/Auth";
import FormApplication from "./pages/FormApplication";
import FormUser from "./pages/FormUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import ProjectManagment from "./pages/ProjectManagment";
import ProjectsForUser from "./pages/ProjectsForUser";
import Register from "./pages/Register";
import Specialities from "./pages/Specialties";
import Users from "./pages/Users";
import { ADMIN_ROUTE, APPLICATIONS_AVAILABLE_ROUTE, APPLICATIONS_ROUTE, APPLICATION_FORM_ROUTE, AUTH_ROUTE, HOME_ROUTE, MATERIAL_FORM_ROUTE, MATERIAL_ROUTE, PROFILE_ROUTE, PROJECTS_ROUTE, PROJECT_MANAGMENT_ROUTE, PROJECT_ROUTE, REGISTER_ROUTE, SPECIALITIES_FORM_ROUTE, SPECIALITIES_ROUTE, USERS_ROUTE, USER_FORM_ROUTE, WORK_FORM_ROUTE, WORK_ROUTE } from "./utils/consts";
import FormSpeciality from "./pages/FormSpecilaity";
import Materials from "./pages/Materials";
import FormMaterial from "./pages/FormMaterial";
import Works from "./pages/Works";
import FormWork from "./pages/FormWork";

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
        path: PROJECT_ROUTE  + '/:id',
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
    {
        path: USER_FORM_ROUTE,
        Component: FormUser
    },
    {
        path: SPECIALITIES_ROUTE,
        Component: Specialities
    },
    {
        path: SPECIALITIES_FORM_ROUTE,
        Component: FormSpeciality
    },
    {
        path: MATERIAL_ROUTE,
        Component: Materials
    },
    {
        path: MATERIAL_FORM_ROUTE,
        Component: FormMaterial
    },
    {
        path: WORK_ROUTE,
        Component: Works
    },
    {
        path: WORK_FORM_ROUTE,
        Component: FormWork
    },

]