import Layout from '@/layout';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);
