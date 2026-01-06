import { RouterProvider } from 'react-router';
import { HashModalRoot, registerHashModal } from '@/components/common/HashModal';
import { SearchModal } from '@/components/common/HashModal/modals/SearchModal';
import { routes } from '@/router';

registerHashModal('search', SearchModal);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <HashModalRoot />
    </>
  );
}

export default App;
