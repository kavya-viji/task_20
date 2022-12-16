a=document.createElement("Button")
a.setAttribute("onclick","addition();");
a.innerHTML="Click Me"
a.style.backgroundColor="lavender";
a.style.height="40px";
a.style.width="10%";
a.style.border="dotted";
document.body.appendChild(a);
//document.write('<br/>','<br/>');

function addition()
{
   x=document.createElement("Button");
   x.setAttribute("onclick","single();"); 
   x.innerHTML="Start";
   x.style.backgroundColor="pink";
   x.style.height="40px";
   x.style.width="10%";
   x.style.border="dotted";
   document.body.appendChild(x)
   
}

function single()
{
	var a = document.createElement("input");
    a.setAttribute("type", "text");
    a.setAttribute("placeholder", "Enter the Number:");
    a.setAttribute("id","n");
    a.style.backgroundColor="lightgreen";
    a.style.height="40px";
    a.style.width="20%";
	a.style.border="dotted";
    document.body.appendChild(a);

    b=document.createElement("Button");
    b.setAttribute("onclick","run();");
    b.innerHTML="Run";
    b.style.backgroundColor="lightblue";
    b.style.height="40px";
    b.style.width="10%";
	b.style.border="dotted";
    document.body.appendChild(b)
} 

function run()
{
	a = Number(document.getElementById("n").value);
	
	var l=a;
	var sum=0;
	while(a>0)
	{
	var num=a%10;

	sum=sum+(num**3);

	a=parseInt(a/10);
	}
	if(sum==l)
	{
		document.write("The given number is a Armstrong number");	
	}
	else
	{
		document.write("The given number is not a Armstrong number");	
	}
	
    document.body.style.backgroundColor="turquoise";
    document.body.style.textAlign="center";

  
}	

document.body.style.backgroundColor="lightgray";
document.body.style.textAlign="center";
