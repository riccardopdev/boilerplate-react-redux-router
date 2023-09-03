import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const RootLayout = () => {
    const { state } = useNavigation();
    const isLoading = state === 'loading';

    return (
        <>
            <NavigationBar />
            <ScrollRestoration />
            {isLoading ? <h2>Loading...</h2> : <Outlet />}
        </>
    );
};

export default RootLayout;
