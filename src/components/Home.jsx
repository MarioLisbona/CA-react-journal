import React from 'react'
import { Link } from 'react-router-dom'

// creating the React Arrow Function Component with Export for Home component

const Home = ({ entries }) => {

  return (
    <>
    <h2>Journal Entries</h2>
      {entries.map((entry, idx) => (
      <p key={idx}>
        <Link to={`entry/${idx}`}>{entry.content}</Link>
      </p>
      ))}
    </>
  )
}

export default Home