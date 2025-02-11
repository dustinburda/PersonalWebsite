import { Fragment, useState } from "react";
import { educationObjects } from "./data/educationdata"; 
import educationRef from "./Nav"

function MoreButton( {educationObject} )
{
    const [showMore, setShowMore] = useState(false);

    let handleClick = () => {
        setShowMore(!showMore);
    }

    return(
    <>
        <button class="more-button" onClick={handleClick}>
            {!showMore ? ("more") : ("less")}
        </button>
        {showMore &&  
            (<div class="education-extra">
                <div>Relevant Coursework: {educationObject.relevantCoursework}</div>
                <div>GPA: {educationObject.gpa}</div>
            </div>)}
    </>
    );
}

function EducationItem(  {educationRef, educationObject, index, arr} )
{
    return (
    <> 
        <div class="school" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div> 
                <div class="education-name">{educationObject.name}</div>
                <div class="education-major">{educationObject.degree}</div>
                <MoreButton educationObject={educationObject}/>
            </div>
            <div class="grad-date">
                <p>{educationObject.graduation_date}</p>
            </div>
            
        </div>
        {index < arr.length - 1 && (<hr class="education-divider"/>)}
    </>
    );
}

export default function Education( {educationRef} )
{

return(
  <Fragment>
  <div class="education" ref={educationRef}>
    <h2>Education</h2>
    <div>
        {educationObjects.map((educationObject, index, arr) =>
            <EducationItem educationObject={educationObject} index={index} arr={arr}/>
        )}
        </div>
    </div>
    <hr />
    </Fragment>
);
}
