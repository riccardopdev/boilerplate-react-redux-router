import { createBrowserRouter } from 'react-router-dom';

/* Pages and layouts */
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import UsersPage from '../pages/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '*', element: <NotFoundPage /> },
            { index: true, element: <HomePage /> },
            { path: '/posts', element: <PostsPage /> },
            { path: '/users', element: <UsersPage /> },
        ],
    },
]);

export default router;
