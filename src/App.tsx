import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import HomePage from './HomePage/HomePage';
import LandingPage from "./LandingPage/LandingPage";
import './App.css'

import { FormsPage, GraphPage, ReportsPage, NewFormPage } from './Pages/Pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/home',
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <FormsPage />,
      },
      {
        path: 'graphs',
        element: <GraphPage />
      },
      {
        path: 'reports',
        element: <ReportsPage />
      },
      {
        path: 'new-form',
        element: <NewFormPage />
      },

    ]
  }
]);

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
