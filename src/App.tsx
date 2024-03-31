import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

import HomePage from './HomePage/HomePage';
import LandingPage from "./LandingPage/LandingPage";
import Forms from "./Forms/Forms";
import LoginForm from "./LoginForm/LoginForm.tsx"
import './App.css'


import { FormsPage, ReviewPage, GraphPage, ReportsPage, NewFormPage } from './Pages/Pages'
import FormCheck from './Forms/FormCheck.tsx';
import FormApprove from './FormApprove/FormApprove.tsx';
import GraphDisplay from './Graphs/GraphDisplay.tsx';
import ReportDisplay from './Reports/ReportDisplay.tsx';

const myColor: MantineColorsTuple = [
  '#eef2fb',
  '#dae0f2',
  '#b1bee6',
  '#849adb',
  '#607bd2',
  '#4a68ce',
  '#3e5fcd',
  '#314eb5',
  '#2945a3',
  '#1e3c90'
];

const theme = createTheme({
  focusRing: "never",
  primaryColor: 'myColor',
  colors: {
    myColor,
  }
});


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
      element: <HomePage username={username} setUsername={setUsername} />,
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
          path: 'reports/display',
          element: <ReportDisplay />
        },
        {
          path: 'new-form',
          element: <NewFormPage />
        },

      ]
    }
  ]);
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
