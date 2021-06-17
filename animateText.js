 $(window).ready(function(){

    jQuery("#welcomeInit").css('opacity', '1');
    const txt = document.querySelector(".fancy"); 
    const strText = txt.textContent;
    const splitText = strText.split("");
    
   txt.textContent = "";
    for (var i=0;i<splitText.length;i++ )
    {
          txt.innerHTML += "<span>" + splitText[i] + "</span>";
    }
     var char = 0;
     var timer;
   
    function animateOnLoad()
    {
     
       var timer = setInterval(onTick, 150);
    }
   
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
   
   
       window.addEventListener("load", animateOnLoad());
       // animateOnLoad();
   
   
   
   
   
   
       //BACKUP
   
   
   
   
       function fadeOut()
    {
        if (timer==null)
        {
   
           var timer3 = setTimeout(fadeOutInner,1000);
           
   
           function fadeOutInner()
           {
                   var spanArray = txt.querySelectorAll('span');
   
               var itsWhile = 0;
               timer2 = setInterval(onTick2,225);
               function onTick2()
               {
                   spanArray[itsWhile].classList.add('fade2');
                   
                   
               itsWhile++;
               if(itsWhile===splitText.length)
               {
                   clearInterval(timer2);
                   timer2=null;
                   return;
               }
               
                   
               }
           }
           
        }
    }

 })
 
 
