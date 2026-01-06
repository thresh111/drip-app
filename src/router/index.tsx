import Layout from '@/layout';
import Agent from '@/pages/agent';
import KnowledgeBase from '@/pages/knowledge-base';
import Login from '@/pages/login';
import Test from '@/pages/test';
import Workflow from '@/pages/workflow';
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
      {
        path: '/knowledge-base',
        element: <KnowledgeBase />,
      },
      {
        path: '/workflow',
        element: <Workflow />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);
