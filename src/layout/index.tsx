import { Outlet } from 'react-router';
import Nav from './nav';

function Layout() {
  return (
    <div className={'flex h-full w-full overflow-hidden'}>
      <Nav />
      <div className={'relative h-full min-w-0 flex-1 py-0 pr-0'}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
