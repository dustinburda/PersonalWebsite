import { Fragment } from "react";

export default function Education()
{
  let educationObjects = [
    {
        name: "Georgia Institute of Technology",
        degree: "MS in Computer Science",
        graduation_date: "2025 - Present",
    },
    {
        name: "University of Chicago",
        degree: "BA in Mathematics, Computer Science Minor",
        graduation_date: "2018 - 2022",
    }
  ]


return(
  <Fragment>
  <div class="education">
    <h2>Education</h2>
    <div>
            {educationObjects.map((educationObject, index, arr) =>
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
            )}
        </div>
    </div>
    <hr />
    </Fragment>

);
}
