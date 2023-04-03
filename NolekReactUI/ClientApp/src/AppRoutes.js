import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Menu } from "./components/Menu";
import { OpgaveInfo } from "./components/OpgaveInfo";
import { Opgave1 } from "./components/Opgave1";
import { Rapport } from "./components/Rapport";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
        path: '/login',
        element: <Login />
    },
    {
        path: '/menu',
        element: <Menu />
    },
    {
        path: '/opgaveinfo',
        element: <OpgaveInfo />
    },
    {
        path: '/rapport',
        element: <Rapport />
    },
    {
        path: '/opgave1',
        element: <Opgave1 />
    },
];

export default AppRoutes;
