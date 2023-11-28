import './App.scss';
import TaskList from './pages/TaskList/TaskList';
import AddTask from './pages/AddTask/AddTask';
import EditTask from './pages/EditTask/EditTask';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

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
          element: <EditTask />
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
