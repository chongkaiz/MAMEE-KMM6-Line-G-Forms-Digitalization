import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';


import HomePage from './HomePage/HomePage';
import LandingPage from "./LandingPage/LandingPage";
import TestForms from "./Forms/Forms";
import LoginForm from "./LoginForm/LoginForm.tsx"
import './App.css'


import { FormsPage, ReviewPage, GraphPage, ReportsPage, NewFormPage } from './Pages/Pages'
import FormCheck from './Forms/FormCheck.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginForm />
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
        path: 'form-input',
        element: <TestForms />,
      },
      {
        path: 'form-input/check',
        element: <FormCheck />
      },
      {
        path: 'form-check',
        element: <ReviewPage />,
        
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
