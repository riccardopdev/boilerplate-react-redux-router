import { createBrowserRouter } from 'react-router-dom';

/* Pages and layouts */
import RootLayout from '../layout/RootLayout';
import { HomeRoute } from '../routes/HomeRoute';
import { PostsRoute } from '../routes/PostsRoute';
import { UsersRoute } from '../routes/UsersRoute';
import { NotFoundRoute } from '../routes/NotFoundRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '*', ...NotFoundRoute },
            { index: true, ...HomeRoute },
            { path: '/posts', ...PostsRoute },
            { path: '/users', ...UsersRoute },
        ],
    },
]);

export default router;
