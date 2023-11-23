import { createBrowserRouter } from "react-router-dom";
import InitialPage from "./pages";
import Wikipedia from "./pages/wikipedia/index";
import YouTube from "./pages/youtube";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <InitialPage />,
        children: [
            {
                path: "/wikipedia",
                element: <Wikipedia />,
            },
            {
                path: "/youtube",
                element: <YouTube />,
            },
        ]
    }
]);

export default routes;