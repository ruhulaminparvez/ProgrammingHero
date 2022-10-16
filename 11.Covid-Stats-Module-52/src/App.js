import './App.css';
import Stats from './components/Stats/Stats';
import Syndrome from './components/Syndrome/Syndrome';
import Prevention from './components/Prevention/Prevention';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Main from './components/layout/Main';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: '/',
     element: <Main/>,
     children: [
        { path: '/', element: <Stats/> },
        { path: '/stats', element: <Stats/> },
        { path: '/syndrome', element: <Syndrome/> },
        { path: '/prevention', element: <Prevention/> },
        { path: '/contact', element: <Contact/> },
        { path: '*', element: <NotFound/> }
     ]
    },
    { path: '*', element: <NotFound/> }
   ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
