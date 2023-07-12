import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: `videos`, element: <Home /> },
      { path: `videos/:keyword`, element: <Search /> },
      { path: `video/watch/:id`, element: <VideoPlayer /> },
      // { path: `/video/:id([0-9a-fA_Z-_]{11})`, element: <videos /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
