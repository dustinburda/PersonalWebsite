function Picture()
{
    return(
        <div class="picture">
            <img src="./react.svg"></img>
        </div>
    );
}

function Links()
{
    return(
        <div class="contacts">
            <a>github  </a>
            <a>linkedin  </a>
            <a>resume  </a>
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
    <div class="header">
        <Intro />
        <Picture />
    </div>
  );
}
