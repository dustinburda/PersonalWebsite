import { useRef } from 'react';


// const experienceRef = useRef(null);
// const projectRef = useRef(null);


export default function Nav( {educationRef, experienceRef, projectRef} )
{
  return (
    <div>
      <div class="navbar" style={{ display: "flex", justifyContent: "space-between"}}>
        <a class="nav-link" onClick={() => educationRef.current.scrollIntoView({behavior: 'smooth'})}>Education</a>
        <a class="nav-link" onClick={() => experienceRef.current.scrollIntoView({behavior: 'smooth'})}>Experience</a>
        <a class="nav-link" onClick={() => projectRef.current.scrollIntoView({behavior: 'smooth'})}>Projects</a>
      </div>
      <hr />
    </div>
  );

}