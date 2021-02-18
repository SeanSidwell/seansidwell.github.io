/* 


function fadeOut()
{
        console.log(timer);

if (timer == null)
{
    timerTwo = setTimeout(fadoo,1000);
}

        var count=0;
    while (timer == null && count<splitText.length)
    {


        var spanArray = document.querySelectorAll('span'); 
        console.log(spanArray);
        
        
        
        for(var i=0;i<splitText.length;i++)
        {
            spanArray[i].classList.add('fade2');
        }
        
        count++;
    }

}

 */

 /* for(var i=0; i<splitText.length;i++)
            {
                debugger;
                console.log(spanArray[i].classList);
                spanArray[i].classList.add('fade2');
            } */
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