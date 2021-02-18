

  

var screenWidth = window.matchMedia("(min-width: 426px)")


function mediaQuery(screenWidth)
{
    if(screenWidth.matches)
    {
      document.getElementById("htmlBox").setAttribute("href", "#topOfSkillsDiv");
      document.getElementById("cssBox").setAttribute("href", "#topOfSkillsDiv");
      document.getElementById("javascriptBox").setAttribute("href", "#topOfSkillsDiv");
      document.getElementById("bootstrapBox").setAttribute("href", "#topOfSkillsDiv");
      document.getElementById("unityBox").setAttribute("href", "#topOfSkillsDiv");
      document.getElementById("cppBox").setAttribute("href", "#topOfSkillsDiv");
    }
    else
    {
      document.getElementById("htmlBox").setAttribute("href", "#htmlBox");
      document.getElementById("cssBox").setAttribute("href", "#htmlBox");
      document.getElementById("javascriptBox").setAttribute("href", "#htmlBox");
      document.getElementById("bootstrapBox").setAttribute("href", "#htmlBox");
      document.getElementById("unityBox").setAttribute("href", "#htmlBox");
      document.getElementById("cppBox").setAttribute("href", "#htmlBox");
    }
}

mediaQuery(screenWidth);