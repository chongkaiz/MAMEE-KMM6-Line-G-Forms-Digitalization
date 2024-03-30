import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import HomePage from './HomePage/HomePage';
import LandingPage from "./LandingPage/LandingPage";
import Forms from "./Forms/Forms";
import LoginForm from "./LoginForm/LoginForm.tsx"
import './App.css'


import { FormsPage, ReviewPage, GraphPage, ReportsPage, NewFormPage } from './Pages/Pages'
import FormCheck from './Forms/FormCheck.tsx';
import FormApprove from './FormApprove/FormApprove.tsx';
import GraphDisplay from './Graphs/GraphDisplay.tsx';


function App() {
  const [username, setUsername] = useState("");


  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: <LoginForm username={username} setUsername={setUsername} />
    },
    {
      path: '/home',
      element: <HomePage username={username} />,
      children: [
        {
          index: true,
          element: <FormsPage />,
        },
        {
          path: 'form-input',
          element: <Forms />,
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
          path: 'form-check/approve',
          element: <FormApprove />,

        },
        {
          path: 'graphs',
          element: <GraphPage />
        },
        {
          path: 'graphs/display',
          element: <GraphDisplay />
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
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
