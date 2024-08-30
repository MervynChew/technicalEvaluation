import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import EventPage from './pages/event-page'
import EventPage2 from './pages/event-page-2'
import Event2324Page from './pages/y2324-event'
import Event2223Page from './pages/y2223-event'
import NotFound from './pages/NotFound'

import LonDetails from './pages/lon'
import PixelDetails from './pages/pixel'
import AgmDetails from './pages/agm'
import VhackDetails from './pages/vhack'
import SukappsDetails from './pages/sukapps'
import FrosyDetails from './pages/frosy'
import Me2Details from './pages/me2'
import VcsirfDetails from './pages/vcsirf'
import CSBersamamuDetails from './pages/csbersamamu'

import Lon2Details from './pages/lon2'
import Pixel2Details from './pages/pixel2'
import Agm2Details from './pages/agm2'
import CssportDetails from './pages/cssport'
import Vhack2Details from './pages/vhack2'
import Me22Details from './pages/me22'
import CppclinicDetails from './pages/cppclinic'
import CsirfDetails from './pages/csirf'
import CSBersamamu2Details from './pages/csbersamamu2022'

const router = createBrowserRouter([
  {
    path: "/",
    element: <EventPage/>,
  },
  {
    path: "event-page",
    element: <EventPage/>,
  },
  {
    path: "event-page-2",
    element: <EventPage2/>,
  },
  {
    path: "event-2324",
    element: <Event2324Page/>,
  },
  {
    path: "event-2223",
    element: <Event2223Page/>,
  },
  {
    path: "lon-details",
    element: <LonDetails/>,
  },
  {
    path: "pixel-details",
    element: <PixelDetails/>,
  },
  {
    path: "agm-details",
    element: <AgmDetails/>,
  },
  {
    path: "vhack-details",
    element: <VhackDetails/>,
  },
  {
    path: "sukapps-details",
    element: <SukappsDetails/>,
  },
  {
    path: "frosy-details",
    element: <FrosyDetails/>,
  },
  {
    path: "me2-details",
    element: <Me2Details/>,
  },
  {
    path: "vcsirf-details",
    element: <VcsirfDetails/>,
  },
  {
    path: "csbersamamu-details",
    element: <CSBersamamuDetails/>,
  },
  {
    path: "lon2023-details",
    element: <Lon2Details/>,
  },
  {
    path: "pixel2023-details",
    element: <Pixel2Details/>,
  },
  {
    path: "agm2023-details",
    element: <Agm2Details/>,
  },
  {
    path: "cssport2023-details",
    element: <CssportDetails/>,
  },
  {
    path: "vhack2023-details",
    element: <Vhack2Details/>,
  },
  {
    path: "me22023-details",
    element: <Me22Details/>,
  },
  {
    path: "cppclinic2023-details",
    element: <CppclinicDetails/>,
  },
  {
    path: "csirf2023-details",
    element: <CsirfDetails/>,
  },
  {
    path: "csbersamamu2022-details",
    element: <CSBersamamu2Details/>,
  },
  {
    path: "404-Not-Found",
    element: <NotFound/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
