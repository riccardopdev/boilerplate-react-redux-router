import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <h1>404: Page not found.</h1>
            <p>
                Try this <Link to="/">link</Link>.
            </p>
        </>
    );
};

export const NotFoundRoute = {
    element: <NotFound />,
};
