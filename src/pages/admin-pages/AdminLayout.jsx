
import { Outlet } from 'react-router-dom';
import Navigations from '../../components/Navigations';

function AdminLayout() {
  return (
    <div className='bg-gray-dark dark:bg-gray-light'>
    <header>
        <Navigations/>
    </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;
