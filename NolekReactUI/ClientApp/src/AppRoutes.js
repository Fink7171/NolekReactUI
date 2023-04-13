import { Login } from "./components/Login";
import { Menu } from "./components/Menu";
import { Opgave1 } from "./components/Opgave1";
import { Rapport } from "./components/Rapport";

const AppRoutes = [
 
    {
        index: true,
        path: '/login',
        element: <Login />
    },
    {
        path: '/menu',
        element: <Menu />
    },
    {
        path: '/opgave1',
        element: <Opgave1 />
    },
    {
        path: '/rapport',
        element: <Rapport />
    },
    
];

export default AppRoutes;
