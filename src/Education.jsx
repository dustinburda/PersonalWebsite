import { Fragment } from "react";
import { educationObjects } from "./data/educationdata"; 


function EducationItem(  {educationObject, index, arr} )
{
    return (
    <> 
        <div class="school" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div> 
                <div class="education-name">{educationObject.name}</div>
                <div class="education-major">{educationObject.degree}</div>
            </div>
            <div class="grad-date">
                <p>{educationObject.graduation_date}</p>
            </div>
        </div>
        {index < arr.length - 1 && (<hr class="education-divider"/>)}
    </>
    );
}

export default function Education()
{

return(
  <Fragment>
  <div class="education">
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
