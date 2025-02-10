import { Fragment } from "react";
import { experienceObjects } from "./data/experiencedata";

function ExperienceItem( {experienceObject, index, arr} )
{
    return (
    <>
        <div class="job" style = {{ display: "flex", justifyContent: "space-between"}}>
            <div>
                <div class="job-name"> {experienceObject.companyName} </div>
                <div class="job-title"> {experienceObject.title} </div>
            </div>
            <div class="job-date">
                {experienceObject.date}
            </div>
        </div>
        {index < arr.length - 1 && <hr class="experience-divider"/>}
    </>
    );
}


export default function Experience()
{
    return(
        <Fragment>
            <div class="experience">
                <h2>Experience</h2>
                {experienceObjects.map((experienceObject, index, arr) => 
                    <ExperienceItem experienceObject = {experienceObject} index = {index} arr = {arr}/>
                )}
            </div>
            <hr />
        </Fragment>

    );
}