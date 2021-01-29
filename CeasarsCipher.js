//SERR PBQR PNZC should decode to FREE CODE CAMP
// 
// 
/* 
const letter=
{
    A: '1', B: '2', C: '3', D: '4', E: '5',F:'6',G:'7',H:'8',I:'9',J:'10',K:'11',L:'12',M:'13',N:'14',O:'15',
    P:'16', Q:'17',R:'18',S:'19',T:'20',U:'21',V:'22',W:'23',X:'24',Y:'25',Z:'26'

};
 */
function rot13(param1);
function buttonClick();




function rot13(param1)
{
    /* var strA="SERR PBQR PNZC";
    var decrpyted = (strA).charCodeAt(20);
    document.write(decrpyted); */

    
    var str;
    var temp;
    var finalString="";
    var stringArray = [];
    var asciiArray = [];
    var translatedArray = [];
    str=param1;
    var phraseLength = str.length;
   
    for(var i=0; i<phraseLength;i++)
    {
        stringArray[i] = str.charAt(i);
    }

    for(var i =0; i<str.length;i++)
    {
        temp = stringArray[i];
        asciiArray[i] = temp.charCodeAt(0);
        
    }
    //ASCII array is complete, now do step 3

    for(var i =0; i<str.length;i++)
    {
        if(asciiArray[i]>=65 && asciiArray[i]<=90)
       {     asciiArray[i] = asciiArray[i] + 13;
                 if(asciiArray[i]>90)
                 {
                   asciiArray[i]= asciiArray[i]-26;
                 }
         }
    }

    // step 4

    for(var i =0; i<str.length;i++)
    {
        temp=asciiArray[i];
        translatedArray[i] = String.fromCharCode(temp);
        
    }

    for(var i =0; i<str.length;i++)
    {
       finalString = finalString + translatedArray[i];
        
    }



    //finish
        document.write(finalString);
        return finalString;
        
    
    
}


function buttonClick()
{
    var userInput = document.getElementById("text1").value;
    alert("value inside the textbox is: "+userInput);
}