const externalLinks = [...document.querySelectorAll('a[href^="http"')];
console.log(externalLinks);
externalLinks.forEach(link => link.classList.add('external'));


// HTML FILE
{/* <a name="list">список</a>
    <ul>
        <li><a href="http://google.com">http://google.com</a></li>
        <li><a href="/tutorial">/tutorial.html</a></li>
        <li><a href="local/path">local/path</a></li>
        <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
        <li><a href="http://nodejs.org">http://nodejs.org</a></li>
        <li><a href="http://internal.com/test">http://internal.com/test</a></li>
    </ul> */}

    // CSS FILE
// .external {
//     background: yellow;
// }