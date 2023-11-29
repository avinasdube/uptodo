import './App.scss';
import TaskList from './pages/TaskList/TaskList';
import AddTask from './pages/AddTask/AddTask';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {

  // DEFINING LAYOUT FOR EACH PAGE
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  // DEFINING ROUTING PATHS TO EACH PAGE
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <TaskList />
        },
        {
          path: '/tasklist',
          element: <TaskList />
        },
        {
          path: '/add',
          element: <AddTask />
        },
        {
          path: '/edit/:taskid',
          element: <AddTask />
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
