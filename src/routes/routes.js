import React from "react";
import Members from "../components/Members/Members";
const CreateUser = React.lazy(() => import("../components/CreateUser/CreateUser"));
const DataTable = React.lazy(() => import("../utilities/DataTable/DataTable"));

const routes = [
    {
        enabled: true,
        path: "/dashboard",
        link: "/dashboard",
        title:"Dashboard",
        component: CreateUser,
        iconClass: "las la-igloo",
        navbar: "dashboard",
        child: null
    }, {
        enabled: true,
        path: "/customers",
        link: "/customers",
        title:"customers",
        component: Members,
        iconClass: "las la-users",
        navbar: "customers",
        child: [
            {
                name: "Basic Map",
                path: "/customers/basic",
            },
            {
                name: "Markers",
                path: "/customers/markers",
            },
        ]
    }, {
        enabled: true,
        path: "/Projects",
        title:"Projects",
        component: DataTable,
        link: "/Projects",
        iconClass: "las la-clipboard-list",
        navbar: "Projects",
        child: null
    }
];
export default routes.filter((route) => route.enabled);