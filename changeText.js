var htmlText= "HTML5 is the foundation of every website that exists today. It is an essential skill for every web developer because it allows documents to be displayed on web browsers. It is supplemented by various other technologies to enhance style and capability."
var cssText = "Cascading Style Sheets, abbreviated as CSS3, is the fundamental styling element for all websites. It is used in congruence with HTML and Javascript to breathe color, size, shape, and animation into the world wide web."
var javascriptText = "Javascript, otherwise known as JS, is a high level object-oriented scripting language. Javascript has the ability to work with HTML and CSS to provide unlimited customization, functionality, calculation, and capability."
var bootstrapText = "Java is one of my favorite object oriented programming languages because of it's ease of use. It is a great environment for simple projects and algorithms. It has many functional uses and is available for most platforms. "
var unityText = "SQL databases are the backbone of a full stack application. Useful for storing and organizing large amounts of data, a database must be carefully constructed to provide lasting value in a changing environment."
var cppText = 'C++ is an object-oriented programming language that emphasizes optimization of computer memory to produce highly efficient programs and application. C++ has been an industry standard for decades, meaning it has incredible library support as well as some of the best debugging environments.'

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
    paragraph.textContent =  htmlText;//"Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. ";
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
    paragraph.textContent = cssText; //"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript ";
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
    paragraph.textContent = javascriptText; //"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class function ";
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
    paragraph.textContent = bootstrapText; //"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.";
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
    paragraph.textContent = unityText; //" Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.'s Worldwide Developers Conference as a Mac OS X-exclusive game engine. As of 2018, the engine had been extended to support more than 25 platforms.";
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
    paragraph.textContent = cppText; //" C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes";
   paragraph.classList.add("fadeParagraph");
    
}
