import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { fields } from "./DynamicForms/data";
import HomePage from './HomePage/HomePage';
import LandingPage from "./LandingPage/LandingPage";
import TestForms from './TestForms/TestForms';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/form-1',
    element: <TestForms fields={fields} />
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
