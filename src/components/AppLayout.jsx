
import { Outlet } from 'react-router-dom';
import Navbars from './Navbars';





export default function AppLayout() {
  return (
    <>

      <div className="py-4 bg-gray-dark dark:bg-gray-light min-h-full flex flex-wrap justify-center items-center ">
          <Navbars/>

        <main className="bg-opacity-25 mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </>
  );
}
``
