import { Fragment } from "react";
import { projectObjects } from "./data/projectsdata";

function ProjectItem( {projectObject, index, arr} ) 
{
    return (
    <>
        <div class="project" style={{ display: "flex", justifyContent: "space-between"}}>
            <div>
                <div class="project-name">
                    {projectObject.name} <span class="project-description"> - {projectObject.description}</span>
                </div>
                <div class="project-technology">
                    Tools: {projectObject.technologies}
                </div>
            </div>
            <a class="github-link" href={projectObject.githubLink}>link</a>
        </div>
        {index < arr.length - 1 && (<hr class="project-divider"/>)}
    </>
    );
}

export default function Projects( {projectRef} )
{
    return(
        <Fragment>
            <div class="projects" ref={projectRef}>
                <h2>Projects</h2>
                {projectObjects.map((projectObject, index, arr) => 
                    <ProjectItem projectObject={projectObject} index={index} arr={arr}/>
                )}
            </div>
            <hr />
        </Fragment>
    );
}