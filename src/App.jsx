
import Nav from './Nav.jsx'
import Header from './Header.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import './css/my.css'
import { useRef } from 'react'



function Footer()
{
  return(
    <p style={{margin: '20px 100px 0px 100px', fontSize: "12px"}}>Dustin Burda 2025</p>
  );
}

function App() {

  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  
  return (
    <div class="App">
      <Header />
      <Nav educationRef={educationRef} experienceRef={experienceRef} projectRef={projectRef}/>
      <Education educationRef = {educationRef} />
      <Experience experienceRef={experienceRef}/>
      <Projects projectRef={projectRef}/>
      <Footer />
    </div>
  )
}

export default App
