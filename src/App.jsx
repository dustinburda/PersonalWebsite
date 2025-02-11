
import Header from './Header.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import './css/my.css'


function Nav()
{
  return (
    <div>
      <div class="navbar" style={{ display: "flex", justifyContent: "space-between"}}>
        <a class="nav-link">Education</a>
        <a class="nav-link">Experience</a>
        <a class="nav-link">Projects</a>
      </div>
      <hr />
    </div>
  );

}

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
      <Nav />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
