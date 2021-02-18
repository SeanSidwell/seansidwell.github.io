document.getElementById("htmlBox").onclick = function()
{
    describeHTML();
    mediaQuery(screenWidth);
}

function describeHTML()
{
    var paragraph = document.getElementById("skillDescription");
    paragraph.classList.remove("fadeParagraph");
    void paragraph.offsetHeight; //The magic Fix for resetting an animation...
    paragraph.textContent = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ";
   paragraph.classList.add("fadeParagraph");
   
    
}
//copies

document.getElementById("cssBox").onclick = function()
{
    describeCSS();
    mediaQuery(screenWidth);
}

function describeCSS()
{
    var paragraph = document.getElementById("skillDescription");
    paragraph.classList.remove("fadeParagraph");
    void paragraph.offsetHeight; //The magic Fix for resetting an animation...
    paragraph.textContent = "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript ";
   paragraph.classList.add("fadeParagraph");
    
}


document.getElementById("javascriptBox").onclick = function()
{
    describeJavascript();
    mediaQuery(screenWidth);
}

function describeJavascript()
{
    var paragraph = document.getElementById("skillDescription");
    paragraph.classList.remove("fadeParagraph");
    void paragraph.offsetHeight; //The magic Fix for resetting an animation...
    paragraph.textContent = "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class function ";
   paragraph.classList.add("fadeParagraph");
    
}

document.getElementById("bootstrapBox").onclick = function()
{
    describeBootstrap();
    mediaQuery(screenWidth);
}

function describeBootstrap()
{
    var paragraph = document.getElementById("skillDescription");
    paragraph.classList.remove("fadeParagraph");
    void paragraph.offsetHeight; //The magic Fix for resetting an animation...
    paragraph.textContent = "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.";
   paragraph.classList.add("fadeParagraph");
    
}

document.getElementById("unityBox").onclick = function()
{
    describeUnity();
    mediaQuery(screenWidth);
}

function describeUnity()
{
    var paragraph = document.getElementById("skillDescription");
    paragraph.classList.remove("fadeParagraph");
    void paragraph.offsetHeight; //The maBootstrapgic Fix for resetting an animation...
    paragraph.textContent = " Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine. As of 2018, the engine had been extended to support more than 25 platforms.";
   paragraph.classList.add("fadeParagraph");
    
}

document.getElementById("cppBox").onclick = function()
{
    describeCPP();
    mediaQuery(screenWidth);
}
function describeCPP()
{
    var paragraph = document.getElementById("skillDescription");
    paragraph.classList.remove("fadeParagraph");
    void paragraph.offsetHeight; //The maBootstrapgic Fix for resetting an animation...
    paragraph.textContent = " C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes";
   paragraph.classList.add("fadeParagraph");
    
}