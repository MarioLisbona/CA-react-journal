// Importing all the necessary modules
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// creating the React Arrow Function Component with Export for NewEntry component
// component accepts entries and setEntries as props - destructured
const NewEntry = ({ setEntries, entries }) => {
    
    // creating variable to  contain the value of the URI arguments passed to the url
    const { category} = useParams()

    // variables to track the state of the data in the journal entry text box
    const [entry, setEntry] = useState('')

    // function to be used for onSubmit for form
    // form being reloaded on submit prevented
    // create a new object with values for category and content keys and assign to newEntry
    // Call setEntries with the exisiting array of entries newEntry as arguments
    function submit(event) {
        event.preventDefault()
        const newEntry =  {
            category: category,
            content: entry
        }

        setEntries([...entries, newEntry])
    }


  // returning React components
  return (
    // fragment to all nested components to be returned
    <>  
        {/* using category value for dynamic title */}
        <h2>New Entry in {category} Category</h2>
        {/* onSubmit form call the submit function */}
        <form onSubmit={submit} className='container'>
            <div>
                {/* assign initial value for text area. onChange call setEntry and pass value of the event - data in Entry box */}
                <textarea value={entry} onChange={(event) => setEntry(event.target.value)}  rows='10' className="form-control"></textarea>
            </div>
            {/* Button to submit journal entry */}
            <button className='btn btn-primary mt-3'>Create entry</button>
        </form>
    </>
  )
}

// Export the NewEntry component
export default NewEntry