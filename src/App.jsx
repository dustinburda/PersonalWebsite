
import Header from './Header.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import './my.css'

function Footer()
{
  return(
    <p style={{margin: '20px 100px 0px 100px', fontSize: "12px"}}>Dustin Burda 2025</p>
  );
}

function App() {
  return (
    <div class="App">
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
