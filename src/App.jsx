
import Header from './Header.jsx'
import './App.css'
import './my.css'

function Education()
{
  return (
    <>
    <h2>Education</h2>
    <ul style={{display: 'flex', listStyleType: 'none', }}>
      <li>Georgia Institute of Technology</li>
      <li>University of Chicago</li>
    </ul>
    </>
  )
}

function App() {
  return (
    <>
      <div>
        <Header />
        <hr />
        <Education />
      </div>
    </>
  )
}

export default App
