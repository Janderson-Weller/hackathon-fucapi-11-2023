import { createBrowserRouter } from "react-router-dom";
import InitialPage from "./pages";
import Wikipedia from "./pages/wikipedia/index";
import YouTube from "./pages/youtube";
import Todo from "./pages/toDoList/Todo";
import TicTacToeGame from "./pages/game/component/TicTacToe";

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
            {
                path: "/game",
                element: <TicTacToeGame />,
            },
        ]
    }
]);

export default routes;