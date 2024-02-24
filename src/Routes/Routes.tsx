import Box from '../component/Boxs/Box';
import Subscribing from '../component/page/Subscribing/Subscribing';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const  router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Box /> },
            { path: "Sub", element: <Subscribing /> },
        ],
    },
]);