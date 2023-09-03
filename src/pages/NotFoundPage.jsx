import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <h1>404: Page not found.</h1>
            <p>
                Try this <Link to="/">link</Link>.
            </p>
        </>
    );
};

export default NotFoundPage;
