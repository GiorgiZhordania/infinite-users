import React from 'react'
import { ReactLocation, Router as ReactRouter } from '@tanstack/react-location'
import Home from './pages/Home'
import User from './pages/User'

const reactLocation = new ReactLocation()

export default function Router() {
  return (
    <ReactRouter
     location={reactLocation}
     routes={[
       {
         path: '/',
         element: <Home />,
       },
       {
        path: '/user/:id',
        element: <User />,
      },
     ]}
   />
  )
}
