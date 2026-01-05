import Layout from '@/layout';
import Agent from '@/pages/agent';
import KnowledgeBase from '@/pages/knowledge-base';
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
    ],
  },
]);
