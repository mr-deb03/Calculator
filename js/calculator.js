
var answers=[],eq=[];

var flag=true;
document.getElementById("subinput").disabled=true;
document.getElementById("maininput").disabled=true;
var inputvalue=document.querySelector("#subinput");
var question=document.querySelector("#maininput");
var showHistory= document.querySelector("#History");

function putvalue(num)
{
   if(!flag)
   {
      
      if(inputvalue.value =="0")
      {
         inputvalue.value=num;
      }
      else
      {
         inputvalue.value += num;
      }
   }

}

function cleardisplay()
{
   document.querySelector("#subinput").value = "0";
   question.value="";
}

function allcleardisplay(){
   document.querySelector("#subinput").value = null;
}

function Dele()
{
   if(inputvalue.value!="")
      {
         if(inputvalue.value.length>1)
            inputvalue.value=inputvalue.value.slice(0,-1);
            else
            {
               inputvalue.value=inputvalue.value.slice(0,-1);
               inputvalue.value="0";
            }
      }
      else
      {
         inputvalue.value="0";
      }
}

function ans()
{
   equation=inputvalue.value+ " = ";
   inputvalue.value = eval(inputvalue.value);
   question.value=equation;
   answers.push(eval(inputvalue.value));
   eq.push(equation);
   history();
}

function disable()
{
   if(!flag)
   {
      document.getElementById("subinput").disabled=true;
      document.getElementById("maininput").disabled=true;
      allcleardisplay();
      document.getElementById("maininput").value=null;
      flag=true;
   }
   else
   {
      document.getElementById("subinput").disabled=false;
      document.getElementById("maininput").disabled=false;
      flag=false;
      document.getElementById("subinput").value=0;
   }
   
}

function history()
{
   var history="<div>";
   eq.reverse();
   answers.reverse();

   for(let i=0;i<eq.length;i++)
   {
      history+="<div class='his'><div class='back'> <button class='btn btn-lg backto'><i class='fa-solid fa-arrow-rotate-left' id='"+i+"'></i></button></div> <p>"+eq[i]+"</p><p>"+answers[i]+"</p></div><br>";
   }
   history+="</div>";
   showHistory.innerHTML=history; 
}

function clearHistory()
{
   const res=confirm(" Are You Sure want to delete history ? ");
   if(res)
   {
      showHistory.innerHTML="";
      eq=[];
      answers=[];
   }
}

document.querySelector("#History").addEventListener('click',function(e)
{
   if(e.target.id){
   question.value=eq[e.target.id];
   inputvalue.value=answers[e.target.id];
   }
})
