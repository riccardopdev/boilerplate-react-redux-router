import { httpGet } from '../api/baseAPI';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const { users } = useLoaderData();

    return (
        <>
            <h1>Users Page</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
};

async function loader({ request: { signal } }) {
    const users = httpGet('users', { signal });
    return { users: await users };
}

export const UsersRoute = {
    loader,
    element: <Users />,
};
