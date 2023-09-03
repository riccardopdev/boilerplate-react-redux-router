import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
        </ul>
    );
};

export default NavigationBar;
