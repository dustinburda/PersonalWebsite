import { Fragment } from "react";

export default function Projects()
{
    let projectObjects = [
        {
            name: "WhittedRT",
            description: "Ray Tracer",
            technologies: "C++ 17, GTest, AWS EC2, Github Actions",
            githubLink: "https://github.com/dustinburda/WhittedRTC"
        },
        {
            name: "SnapShare",
            description: "Photo Sharing App",
            technologies: "Go, PostgreSQL, React",
            githubLink: "https://github.com/dustinburda"
        },
        {
            name: "DesignKit",
            description: "Custom Front-End Framework",
            technologies: "Javascript",
            githubLink: "https://github.com/dustinburda"
        },
        {
            name: "smallDB",
            description: "Toy Database Engine",
            technologies: "C++ 17, GTest",
            githubLink: "https://github.com/dustinburda"
        }
    ]

    return(
        <Fragment>
            <div class="projects">
                <h2>Projects</h2>
                {projectObjects.map((projectObject, index, arr) => 
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
                )}
            </div>
            <hr />
        </Fragment>
    );
}