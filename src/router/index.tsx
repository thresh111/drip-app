import Layout from '@/layout';
import Agent from '@/pages/agent';
import { createBrowserRouter } from 'react-router';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Agent />,
      },
    ],
  },
]);
