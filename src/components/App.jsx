// Importing all the necessary modules
import React from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import { useState } from 'react'


// creating the React Arrow Function Component with Export
// for the parent component of the app.
const App = () => {

  // creating variables and useState hook to track the state of the data entered in the NewEntry component
  const [entries, setEntries] = useState([])

  // returning React components
  return (
    // fragment to all nested components to be returned
    <>
    {/* BrowserRouter, Routes and Route components being used for client side routing */}
      <BrowserRouter>
      {/* NavBar component from Bootstrap CDN */}
      <NavBar />
        <Routes>
            {/* client side routing for 3 pages, Home, Select a category and New Entry
            Path and components that need to be passed are ssigned within the route tag */}
            <Route path='/' element={<Home />} />
            <Route path='/category' element={<CategorySelection />} />

            {/* Each Entry's state needs to be retrieved and set in the NewEntry component.
             Both those variables are passed in as props */}
            <Route path='/entry/new/:category' element={<NewEntry entries={entries} setEntries={setEntries} />} />

            {/* Page nto found route */}
            <Route path='*' element={<h4>404: Page not found</h4>} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}

    </>
  )
}

// export the App component
export default App
