import { Fragment } from "react";
import { links } from "./data/headerdata";
import david from './assets/david.png'

function Picture()
{
    return(
        <div class="picture-frame">
            <img class="picture" src={david}></img>
        </div>
    );
}
function Links()
{
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
