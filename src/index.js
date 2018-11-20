import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>
        Hello YouTube{' '}
        <span role="img" aria-label="camera icon">
          🎥
        </span>
      </h1>
      <h2>This is getting deployed!!</h2>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
