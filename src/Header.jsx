import { Fragment } from "react";

function Picture()
{
    return(
        <div class="picture-frame">
            <img class="picture" src="./src/assets/david.png"></img>
        </div>
    );
}

function Links()
{
    const links = [
        {
            linkName: "github",
            link: "https://github.com/dustinburda"
        },
        {
            linkName: "linkedin",
            link: "https://www.linkedin.com/in/dustin-burda/"
        },
        {
            linkName: "resume",
            link: " ./src/assets/BurdaDustinResumeFuture.pdf"
        }
    ]
    return(
        <div class="contacts">
            {links.map((linkObject) => <a href={linkObject.link}> {linkObject.linkName} </a>)}
        </div>
    );
}

function Intro()
{
  return (
    <div>
        <h1 class="intro-name">Hi, I'm Dustin!</h1>
        <div class="intro-interests"> i love all things programming and math. i enjoy studying topics like graphics, databases, and compilers. i'm also currently learning to draw!</div>
        <Links />
    </div>

  );
}

export default function Header()
{
  return(
    <Fragment>
        <div class="header">
            <Intro />
            <Picture />
        </div>
        <hr />
    </Fragment>
  );
}
