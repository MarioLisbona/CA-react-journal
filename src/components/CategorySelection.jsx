// Importing all the necessary modules
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// creating the React Arrow Function Component with Export for CategorySelection

const CategorySelection = () => {
  // creating variables to track the state of each category for New posts.
  // Imitial state for categories is 'Food', 'Coding', 'Work', 'Other'
    const [categories, setCategories] = useState(['Food', 'Coding', 'Work', 'Other'])
    
  // returning React components
  return (
    // fragment to all nested components to be returned
    <>
      <h2>Please select a category:</h2>
      <ul>
        {/* use map to iterate over the elements in the categories array
        for each element, assign a unique index for React to search with
        and create a <li> with a Link component inside. 
        Withing that link, use the current element {cat} to interpolate
        the URL and name the link*/}

          {categories.map((cat, index) => (
              <li key={index}>
                  <Link to={`/entry/new/${cat}`}>{cat}</Link>
              </li>
          ))}
      </ul>
    </>
  )
}

// Export the CategorySelection component
export default CategorySelection