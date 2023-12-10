import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './routes/root'


function App() {

  return (
      <BrowserRouter>
        <div>
          <AppRoutes/>
        {console.log("app.jsx")}
        </div>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

      </BrowserRouter>
    )
}

export default App
