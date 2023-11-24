import { createBrowserRouter } from "react-router-dom";
import InitialPage from "./pages";
import Wikipedia from "./pages/wikipedia/index";
import YouTube from "./pages/youtube";
import Todo from "./pages/toDoList/Todo";

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
            {
                path: "/todo-list",
                element: <Todo />,
            },
        ]
    }
]);

export default routes;