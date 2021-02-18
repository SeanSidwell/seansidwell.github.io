 const txt = document.querySelector(".fancy"); 
 const strText = txt.textContent;
 const splitText = strText.split("");
 
txt.textContent = "";
 for (var i=0;i<splitText.length;i++ )
 {
       txt.innerHTML += "<span>" + splitText[i] + "</span>";
 }
var char = 0;
var timer = setInterval(onTick, 150);
function onTick()
{
    var span = txt.querySelectorAll('span')[char];
    //console.log(txt.querySelectorAll('span'));
    // console.log(span.classList);
    span.classList.add('fade');
    char++;
    if(char === splitText.length)
    {
        
        complete();
        return;

        
    }
}

function complete()
{
    
    clearInterval(timer);
    timer=null;
    fadeOut();
}

/* 
var spanArray = txt.querySelectorAll('span');
for(var i=0;i<splitText.length;i++)
{
    spanArray[i].classList.add('fade2');
}
 */
