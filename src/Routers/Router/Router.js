import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../components/AddTask/AddTask";
import CompletedTasks from "../../components/CompletedTasks/CompletedTasks";
import Home from "../../components/Home/Home";
import MyTasks from "../../components/MyTasks/MyTasks";
import Main from "../../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/add-task',
                element: <AddTask></AddTask>
            },
            {
                path: '/my-tasks',
                element: <MyTasks></MyTasks>
            },
            {
                path: '/completed-tasks',
                element: <CompletedTasks></CompletedTasks>
            },
        ]
    }
])