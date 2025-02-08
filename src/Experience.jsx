import { Fragment } from "react";

export default function Experience()
{

    let experienceObjects = [
        {
            companyName: "Investortools",
            title: "Software Engineer",
            date: "July 2024 - Present"
        },
        {
            companyName: "Discern",
            title: "Software Engineer Intern",
            date: "April 2024 - May 2024"
        }
    ];

    return(
        <Fragment>
            <div class="experience">
                <h2>Experience</h2>
                {experienceObjects.map((experienceObject, index, arr) => 
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
                )}
            </div>
            <hr />
        </Fragment>

    );
}