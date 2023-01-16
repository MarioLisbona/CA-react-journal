// Importing all the necessary modules
import React, { useEffect } from 'react'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { useState } from 'react'
import ShowEntry from './ShowEntry'



// const seedEntries = [
//   { category: 'Food', content: 'I love Ramen'},
//   { category: 'Work', content: 'Working working working'},
//   { category: 'Coding', content: 'I love using React'}
// ]

// console.log(seedEntries)
// creating the React Arrow Function Component with Export
// for the parent component of the app.
const App = () => {
  // creating variables and useState hook to track the state of the data entered in the NewEntry component
  const [entries, setEntries] = useState([])

  const nav = useNavigate()

  // creating variables to track the state of each category for New posts.
  // Imitial state for categories is 'Food', 'Coding', 'Work', 'Other'
    // const [categories, setCategories] = useState(['Food', 'Coding', 'Work', 'Other'])

    const [categories, setCategories] = useState([])

    useEffect(() => {
      async function fetchCategories() {
        const result = await fetch('https://ca-journal-api-production-0617.up.railway.app/categories')
        const data = await result.json()
        setCategories(data)
      }
      fetchCategories()
    }, [])

    

  useEffect(() => {
      async function fetchEntries() {
      const result = await fetch('https://ca-journal-api-production-0617.up.railway.app/entries')
      const data = await result.json()
      setEntries(data)
      }
      fetchEntries()
  }, [])

  // hoc (higher order component)
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const entry = entries[id]
    return entry ? <ShowEntry entry={entry} /> : <h4>Entry not found</h4>
  }

  const addEntry =  async (category, content) => {
    const id = entries.length

    // const categoryObject = categories.find(cat => cat.name === category)
        const newEntry =  {
            category: category,
            content: content
        }
        //post new entry to API
        const returnedEntry = await fetch('https://ca-journal-api-production-0617.up.railway.app/entries', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          'body': JSON.stringify(newEntry)
        })

        const data = await returnedEntry.json()
        setEntries([...entries, data])
        nav(`/entry/${id}`)
  }

  // returning React components
  return (
    // fragment to all nested components to be returned
    <>
    {/* BrowserRouter, Routes and Route components being used for client side routing */}
      {/* NavBar component from Bootstrap CDN */}
      <NavBar />
        <Routes>
            {/* client side routing for 3 pages, Home, Select a category and New Entry
            Path and components that need to be passed are assigned within the route tag */}
            <Route path='/' element={<Home entries={entries}/>} />
            <Route path='/category' element={<CategorySelection categories={categories}/>} />

            <Route path='/entry/:id' element={<ShowEntryWrapper />} />

            {/* Each Entry's state needs to be retrieved and set in the NewEntry component.
             Both those variables are passed in as props */}
            <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry} />} />

            {/* Page not found route */}
            <Route path='*' element={<h4>404: Page not found</h4>} />
        </Routes>
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}

    </>
  )
}

// export the App component
export default App
