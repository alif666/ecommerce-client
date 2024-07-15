
import { Outlet } from 'react-router-dom';
import Navigations from './Navigations';




export default function AppLayout() {
  return (
    <div className=' bg-white dark:bg-dark text-gray-dark dark:text-gray-light bg-opacity-10'>
    <header className='bg-gray-light dark:bg-gray-dark drop-shadow-md'>
        <Navigations/>
    </header>

      <main>
        <Outlet />
      </main>

    </div>
  );
}
``
